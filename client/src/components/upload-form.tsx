import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useLocation } from "wouter";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Card, CardContent } from "@/components/ui/card";
import { CloudUpload, Music, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

const uploadSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().optional(),
  genre: z.string().optional(),
  artistId: z.string().min(1, "Artist ID is required"),
  isPublic: z.boolean().default(true),
});

type UploadFormData = z.infer<typeof uploadSchema>;

export default function UploadForm() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [dragActive, setDragActive] = useState(false);
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [, setLocation] = useLocation();

  const form = useForm<UploadFormData>({
    resolver: zodResolver(uploadSchema),
    defaultValues: {
      title: "",
      description: "",
      genre: "",
      artistId: "artist-1", // Default to sample artist
      isPublic: true,
    },
  });

  const uploadMutation = useMutation({
    mutationFn: async (data: UploadFormData & { file: File }) => {
      const formData = new FormData();
      formData.append("audio", data.file);
      formData.append("title", data.title);
      formData.append("artistId", data.artistId);
      if (data.description) formData.append("description", data.description);
      if (data.genre) formData.append("genre", data.genre);
      formData.append("isPublic", data.isPublic.toString());

      const response = await fetch("/api/tracks", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || "Upload failed");
      }

      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/tracks"] });
      queryClient.invalidateQueries({ queryKey: ["/api/tracks/recent"] });
      toast({ description: "Track uploaded successfully!" });
      setLocation("/");
    },
    onError: (error: Error) => {
      toast({ 
        description: `Upload failed: ${error.message}`,
        variant: "destructive"
      });
    },
  });

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    const files = e.dataTransfer.files;
    if (files && files[0]) {
      handleFileSelect(files[0]);
    }
  };

  const handleFileSelect = (file: File) => {
    const allowedTypes = ['audio/mpeg', 'audio/wav', 'audio/flac', 'audio/mp4'];
    if (!allowedTypes.includes(file.type)) {
      toast({ 
        description: "Please select a valid audio file (MP3, WAV, FLAC, M4A)",
        variant: "destructive"
      });
      return;
    }

    if (file.size > 50 * 1024 * 1024) { // 50MB
      toast({ 
        description: "File size must be less than 50MB",
        variant: "destructive"
      });
      return;
    }

    setSelectedFile(file);
    if (!form.getValues("title")) {
      const filename = file.name.replace(/\.[^/.]+$/, "");
      form.setValue("title", filename);
    }
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files[0]) {
      handleFileSelect(files[0]);
    }
  };

  const removeFile = () => {
    setSelectedFile(null);
  };

  const onSubmit = (data: UploadFormData) => {
    if (!selectedFile) {
      toast({ 
        description: "Please select an audio file",
        variant: "destructive"
      });
      return;
    }

    uploadMutation.mutate({ ...data, file: selectedFile });
  };

  return (
    <div className="space-y-6">
      {/* File Upload Area */}
      <Card className="bg-dark-elevated border-gray-border">
        <CardContent className="p-8">
          {!selectedFile ? (
            <div
              className={`border-2 border-dashed rounded-xl p-12 text-center transition-colors cursor-pointer ${
                dragActive ? "border-purple-accent bg-purple-accent/5" : "border-gray-border hover:border-purple-accent"
              }`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
              onClick={() => document.getElementById("file-input")?.click()}
              data-testid="file-drop-zone"
            >
              <CloudUpload className="w-12 h-12 text-purple-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Drag & Drop Your Music</h3>
              <p className="text-gray-text mb-4">Support for MP3, WAV, FLAC files up to 50MB</p>
              <Button className="bg-purple-accent hover:bg-purple-600" data-testid="button-choose-files">
                Choose Files
              </Button>
              <input
                id="file-input"
                type="file"
                accept="audio/*"
                onChange={handleFileInputChange}
                className="hidden"
                data-testid="input-file"
              />
            </div>
          ) : (
            <div className="flex items-center justify-between p-4 bg-dark-card rounded-lg border border-gray-border">
              <div className="flex items-center space-x-3">
                <Music className="w-8 h-8 text-purple-accent" />
                <div>
                  <p className="font-medium" data-testid="text-selected-file">{selectedFile.name}</p>
                  <p className="text-sm text-gray-text">
                    {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                  </p>
                </div>
              </div>
              <Button 
                size="icon" 
                variant="ghost" 
                onClick={removeFile}
                data-testid="button-remove-file"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Track Details Form */}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Track Title</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Enter track title" 
                      className="bg-dark-elevated border-gray-border focus:border-purple-accent"
                      data-testid="input-title"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="genre"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Genre</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger 
                        className="bg-dark-elevated border-gray-border focus:border-purple-accent"
                        data-testid="select-genre"
                      >
                        <SelectValue placeholder="Select a genre" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="bg-dark-elevated border-gray-border">
                      <SelectItem value="Electronic">Electronic</SelectItem>
                      <SelectItem value="House">House</SelectItem>
                      <SelectItem value="Techno">Techno</SelectItem>
                      <SelectItem value="Ambient">Ambient</SelectItem>
                      <SelectItem value="Synthwave">Synthwave</SelectItem>
                      <SelectItem value="Other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Describe your track..." 
                    className="bg-dark-elevated border-gray-border focus:border-purple-accent min-h-[100px]"
                    data-testid="textarea-description"
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex justify-end space-x-4">
            <Button 
              type="button" 
              variant="ghost" 
              onClick={() => setLocation("/")}
              data-testid="button-cancel"
            >
              Cancel
            </Button>
            <Button 
              type="submit" 
              disabled={uploadMutation.isPending || !selectedFile}
              className="bg-purple-accent hover:bg-purple-600"
              data-testid="button-upload"
            >
              {uploadMutation.isPending ? "Uploading..." : "Upload Track"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
