"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  FaUpload,
  FaTrash,
  FaFolder,
  FaSpinner,
  FaCheckCircle,
  FaSignOutAlt,
  FaCopy,
  FaImage,
  FaVideo,
  FaFileImage,
} from "react-icons/fa";

const FOLDERS = [
  { value: "hero", label: "Hero Section" },
  { value: "about", label: "About Page" },
  { value: "service", label: "Service Page" },
  { value: "blog", label: "Blog Page" },
  { value: "contact", label: "Contact Page" },
  { value: "exterior-residential", label: "Exterior Residential" },
  { value: "exterior-commercial", label: "Exterior Commercial" },
  { value: "interior-residential", label: "Interior Residential" },
  { value: "interior-commercial", label: "Interior Commercial" },
  { value: "floorplan", label: "Floor Plan" },
  { value: "isometric", label: "Isometric" },
  { value: "landscape", label: "Landscape" },
];

export default function AdminPanel() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("images"); // 'images', 'logos', 'videos'
  const [selectedFolder, setSelectedFolder] = useState("hero");
  const [uploading, setUploading] = useState(false);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);
  const [checkingAuth, setCheckingAuth] = useState(true);
  const [copiedIndex, setCopiedIndex] = useState(null);
  
  // Logo and Video states
  const [logoSection, setLogoSection] = useState("hero"); // 'hero' or 'footer'
  const [videoSection, setVideoSection] = useState("hero"); // 'hero' or 'footer'
  const [heroLogo, setHeroLogo] = useState(null);
  const [footerLogo, setFooterLogo] = useState(null);
  const [heroVideo, setHeroVideo] = useState(null);
  const [footerVideo, setFooterVideo] = useState(null);
  const [logoLoading, setLogoLoading] = useState(false);
  const [videoLoading, setVideoLoading] = useState(false);

  // Fetch images for selected folder
  const fetchImages = async () => {
    setLoading(true);
    try {
      const response = await fetch(`/api/images?folder=${selectedFolder}`, {
        credentials: "include",
      });
      const data = await response.json();
      if (data.success && data.data[selectedFolder]) {
        setImages(data.data[selectedFolder]);
      } else {
        setImages([]);
      }
    } catch (error) {
      console.error("Error fetching images:", error);
      setImages([]);
    } finally {
      setLoading(false);
    }
  };

  // Check authentication on mount
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch("/api/auth/check");
        const data = await response.json();

        if (data.authenticated) {
          setAuthenticated(true);
        } else {
          router.push("/admin/login");
        }
      } catch (error) {
        console.error("Auth check error:", error);
        router.push("/admin/login");
      } finally {
        setCheckingAuth(false);
      }
    };

    checkAuth();
  }, [router]);

  useEffect(() => {
    if (authenticated) {
      if (activeTab === "images") {
        fetchImages();
      } else if (activeTab === "logos") {
        fetchLogos();
      } else if (activeTab === "videos") {
        fetchVideos();
      }
    }
  }, [selectedFolder, authenticated, activeTab, logoSection, videoSection]);

  // Handle logout
  const handleLogout = async () => {
    try {
      await fetch("/api/auth/logout", { method: "POST" });
      router.push("/admin/login");
      router.refresh();
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  // Handle file upload
  const handleUpload = async (files) => {
    if (!files || files.length === 0) return;

    setUploading(true);
    setUploadSuccess(false);

    try {
      const uploadPromises = Array.from(files).map(async (file) => {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("folder", selectedFolder);

        const response = await fetch("/api/upload", {
          method: "POST",
          body: formData,
          credentials: "include",
        });

        if (!response.ok) {
          throw new Error(`Failed to upload ${file.name}`);
        }

        return response.json();
      });

      await Promise.all(uploadPromises);
      setUploadSuccess(true);

      // Refresh images after upload
      await fetchImages();

      // Reset success message after 3 seconds
      setTimeout(() => setUploadSuccess(false), 3000);
    } catch (error) {
      console.error("Upload error:", error);
      alert("Failed to upload images: " + error.message);
    } finally {
      setUploading(false);
    }
  };

  // Handle file input change
  const handleFileChange = (e) => {
    const files = e.target.files;
    handleUpload(files);
  };

  // Handle drag and drop
  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleUpload(e.dataTransfer.files);
    }
  };

  // Handle delete image
  const handleDelete = async (publicId, index) => {
    if (!confirm("Are you sure you want to delete this image?")) return;

    try {
      const response = await fetch(
        `/api/images?publicId=${publicId}&folder=${selectedFolder}`,
        {
          method: "DELETE",
          credentials: "include",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete image");
      }

      // Remove from local state
      setImages(images.filter((_, i) => i !== index));
    } catch (error) {
      console.error("Delete error:", error);
      alert("Failed to delete image: " + error.message);
    }
  };

  // Handle copy URL to clipboard
  const handleCopyUrl = async (url, index) => {
    try {
      await navigator.clipboard.writeText(url);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch (error) {
      console.error("Failed to copy:", error);
      alert("Failed to copy URL to clipboard");
    }
  };

  // Fetch logos
  const fetchLogos = async () => {
    setLogoLoading(true);
    try {
      const response = await fetch(`/api/logo?section=${logoSection}`, {
        credentials: "include",
      });
      const data = await response.json();
      if (data.success && data.data[logoSection]) {
        if (logoSection === "hero") {
          setHeroLogo(data.data.hero);
        } else {
          setFooterLogo(data.data.footer);
        }
      } else {
        if (logoSection === "hero") {
          setHeroLogo(null);
        } else {
          setFooterLogo(null);
        }
      }
    } catch (error) {
      console.error("Error fetching logos:", error);
    } finally {
      setLogoLoading(false);
    }
  };

  // Fetch all logos on mount
  const fetchAllLogos = async () => {
    try {
      const response = await fetch("/api/logo", {
        credentials: "include",
      });
      const data = await response.json();
      if (data.success && data.data) {
        setHeroLogo(data.data.hero);
        setFooterLogo(data.data.footer);
      }
    } catch (error) {
      console.error("Error fetching all logos:", error);
    }
  };

  // Fetch videos
  const fetchVideos = async () => {
    setVideoLoading(true);
    try {
      const response = await fetch(`/api/video?section=${videoSection}`, {
        credentials: "include",
      });
      const data = await response.json();
      if (data.success && data.data[videoSection]) {
        if (videoSection === "hero") {
          setHeroVideo(data.data.hero);
        } else {
          setFooterVideo(data.data.footer);
        }
      } else {
        if (videoSection === "hero") {
          setHeroVideo(null);
        } else {
          setFooterVideo(null);
        }
      }
    } catch (error) {
      console.error("Error fetching videos:", error);
    } finally {
      setVideoLoading(false);
    }
  };

  // Fetch all videos on mount
  const fetchAllVideos = async () => {
    try {
      const response = await fetch("/api/video", {
        credentials: "include",
      });
      const data = await response.json();
      if (data.success && data.data) {
        setHeroVideo(data.data.hero);
        setFooterVideo(data.data.footer);
      }
    } catch (error) {
      console.error("Error fetching all videos:", error);
    }
  };

  // Handle logo upload
  const handleLogoUpload = async (file) => {
    if (!file) return;

    setUploading(true);
    setUploadSuccess(false);

    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("section", logoSection);

      const response = await fetch("/api/logo", {
        method: "POST",
        body: formData,
        credentials: "include",
      });

      if (!response.ok) {
        throw new Error(`Failed to upload logo`);
      }

      setUploadSuccess(true);
      await fetchAllLogos();
      setTimeout(() => setUploadSuccess(false), 3000);
    } catch (error) {
      console.error("Upload error:", error);
      alert("Failed to upload logo: " + error.message);
    } finally {
      setUploading(false);
    }
  };

  // Handle logo delete
  const handleLogoDelete = async () => {
    if (!confirm("Are you sure you want to delete this logo?")) return;

    try {
      const response = await fetch(`/api/logo?section=${logoSection}`, {
        method: "DELETE",
        credentials: "include",
      });

      if (!response.ok) {
        throw new Error("Failed to delete logo");
      }

      await fetchAllLogos();
    } catch (error) {
      console.error("Delete error:", error);
      alert("Failed to delete logo: " + error.message);
    }
  };

  // Handle video upload
  const handleVideoUpload = async (file) => {
    if (!file) return;

    setUploading(true);
    setUploadSuccess(false);

    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("section", videoSection);

      const response = await fetch("/api/video", {
        method: "POST",
        body: formData,
        credentials: "include",
      });

      if (!response.ok) {
        throw new Error(`Failed to upload video`);
      }

      setUploadSuccess(true);
      await fetchAllVideos();
      setTimeout(() => setUploadSuccess(false), 3000);
    } catch (error) {
      console.error("Upload error:", error);
      alert("Failed to upload video: " + error.message);
    } finally {
      setUploading(false);
    }
  };

  // Handle video delete
  const handleVideoDelete = async () => {
    if (!confirm("Are you sure you want to delete this video?")) return;

    try {
      const response = await fetch(`/api/video?section=${videoSection}`, {
        method: "DELETE",
        credentials: "include",
      });

      if (!response.ok) {
        throw new Error("Failed to delete video");
      }

      await fetchAllVideos();
    } catch (error) {
      console.error("Delete error:", error);
      alert("Failed to delete video: " + error.message);
    }
  };

  // Initialize logos and videos when authenticated and tab changes
  useEffect(() => {
    if (authenticated && activeTab === "logos") {
      fetchAllLogos();
    }
    if (authenticated && activeTab === "videos") {
      fetchAllVideos();
    }
  }, [authenticated, activeTab]);

  // Show loading while checking authentication
  if (checkingAuth || !authenticated) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <FaSpinner className="text-4xl text-blue-600 mx-auto mb-4 animate-spin" />
          <p className="text-gray-600">Checking authentication...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 mt-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              Admin Management Panel
            </h1>
            <p className="text-gray-600">
              Upload and manage images, logos, and videos for your website.
            </p>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
            title="Logout"
          >
            <FaSignOutAlt className="mr-2" />
            Logout
          </button>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-lg shadow-md p-2 mb-6 flex gap-2">
          <button
            onClick={() => setActiveTab("images")}
            className={`flex-1 px-4 py-3 rounded-lg transition-colors flex items-center justify-center gap-2 ${
              activeTab === "images"
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            <FaImage />
            Images
          </button>
          <button
            onClick={() => setActiveTab("logos")}
            className={`flex-1 px-4 py-3 rounded-lg transition-colors flex items-center justify-center gap-2 ${
              activeTab === "logos"
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            <FaFileImage />
            Logos
          </button>
          <button
            onClick={() => setActiveTab("videos")}
            className={`flex-1 px-4 py-3 rounded-lg transition-colors flex items-center justify-center gap-2 ${
              activeTab === "videos"
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            <FaVideo />
            Videos
          </button>
        </div>

        {/* Images Tab Content */}
        {activeTab === "images" && (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Folder Selection Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-4 sticky top-4">
                <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                  <FaFolder className="mr-2" />
                  Select Page/Folder
                </h2>
                <div className="space-y-2">
                  {FOLDERS.map((folder) => (
                    <button
                      key={folder.value}
                      onClick={() => setSelectedFolder(folder.value)}
                      className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                        selectedFolder === folder.value
                          ? "bg-blue-600 text-white"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      {folder.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
            {/* Upload Area */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Upload Images to:{" "}
                <span className="text-blue-600">
                  {FOLDERS.find((f) => f.value === selectedFolder)?.label}
                </span>
              </h2>

              {uploadSuccess && (
                <div className="mb-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg flex items-center">
                  <FaCheckCircle className="mr-2" />
                  Images uploaded successfully!
                </div>
              )}

              <div
                className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                  dragActive
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-300 bg-gray-50"
                }`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
              >
                <input
                  type="file"
                  id="file-upload"
                  multiple
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                  disabled={uploading}
                />
                <label
                  htmlFor="file-upload"
                  className="cursor-pointer flex flex-col items-center"
                >
                  {uploading ? (
                    <>
                      <FaSpinner className="text-4xl text-blue-600 mb-4 animate-spin" />
                      <p className="text-gray-600">Uploading images...</p>
                    </>
                  ) : (
                    <>
                      <FaUpload className="text-4xl text-gray-400 mb-4" />
                      <p className="text-gray-600 mb-2">
                        Drag and drop images here, or click to select
                      </p>
                      <p className="text-sm text-gray-500">
                        Multiple images can be uploaded at once
                      </p>
                    </>
                  )}
                </label>
              </div>
            </div>

            {/* Images Grid */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Uploaded Images ({images.length})
              </h2>

              {loading ? (
                <div className="text-center py-12">
                  <FaSpinner className="text-4xl text-gray-400 mx-auto mb-4 animate-spin" />
                  <p className="text-gray-600">Loading images...</p>
                </div>
              ) : images.length === 0 ? (
                <div className="text-center py-12 text-gray-500">
                  <FaFolder className="text-6xl mx-auto mb-4 opacity-50" />
                  <p>No images uploaded for this folder yet.</p>
                </div>
              ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {images.map((image, index) => (
                    <div
                      key={image.publicId || index}
                      className="border rounded-lg overflow-hidden bg-white shadow-sm"
                    >
                      {/* Image Container */}
                      <div className="relative group bg-gray-100 aspect-square">
                        <img
                          src={image.url}
                          alt={image.fileName || `Image ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity flex items-center justify-center">
                          <button
                            onClick={() => handleDelete(image.publicId, index)}
                            className="opacity-0 group-hover:opacity-100 bg-red-600 text-white p-2 rounded-lg hover:bg-red-700 transition-all"
                          >
                            <FaTrash />
                          </button>
                        </div>
                      </div>
                      
                      {/* URL Section Below Image */}
                      <div className="p-3 bg-gray-50 border-t">
                        <p className="text-xs font-medium text-gray-700 mb-2 truncate">
                          {image.fileName}
                        </p>
                        <div className="flex items-center gap-1.5 min-w-0">
                          <input
                            type="text"
                            value={image.url}
                            readOnly
                            onClick={(e) => e.target.select()}
                            className="flex-1 min-w-0 px-2 py-1.5 bg-white border border-gray-300 rounded text-xs text-gray-800 font-mono focus:outline-none focus:ring-2 focus:ring-blue-500 overflow-hidden text-ellipsis"
                          />
                          <button
                            onClick={() => handleCopyUrl(image.url, index)}
                            className={`shrink-0 px-2 py-1.5 rounded text-xs font-medium transition-colors whitespace-nowrap flex items-center justify-center ${
                              copiedIndex === index
                                ? "bg-green-600 text-white"
                                : "bg-blue-600 text-white hover:bg-blue-700"
                            }`}
                            title={copiedIndex === index ? "Copied!" : "Copy URL"}
                          >
                            <FaCopy className="text-xs" />
                            <span className="ml-1 hidden md:inline">
                              {copiedIndex === index ? "Copied" : "Copy"}
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            </div>
          </div>
        )}

        {/* Logos Tab Content */}
        {activeTab === "logos" && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Logo Management
              </h2>
              <div className="flex gap-2 mb-6">
                <button
                  onClick={() => {
                    setLogoSection("hero");
                    fetchLogos();
                  }}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    logoSection === "hero"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  Hero Section
                </button>
                <button
                  onClick={() => {
                    setLogoSection("footer");
                    fetchLogos();
                  }}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    logoSection === "footer"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  Footer Section
                </button>
              </div>

              {uploadSuccess && (
                <div className="mb-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg flex items-center">
                  <FaCheckCircle className="mr-2" />
                  Logo uploaded successfully!
                </div>
              )}

              <div
                className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                  dragActive
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-300 bg-gray-50"
                }`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setDragActive(false);
                  if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
                    handleLogoUpload(e.dataTransfer.files[0]);
                  }
                }}
              >
                <input
                  type="file"
                  id="logo-upload"
                  accept="image/*"
                  onChange={(e) => {
                    if (e.target.files && e.target.files[0]) {
                      handleLogoUpload(e.target.files[0]);
                    }
                  }}
                  className="hidden"
                  disabled={uploading}
                />
                <label
                  htmlFor="logo-upload"
                  className="cursor-pointer flex flex-col items-center"
                >
                  {uploading ? (
                    <>
                      <FaSpinner className="text-4xl text-blue-600 mb-4 animate-spin" />
                      <p className="text-gray-600">Uploading logo...</p>
                    </>
                  ) : (
                    <>
                      <FaUpload className="text-4xl text-gray-400 mb-4" />
                      <p className="text-gray-600 mb-2">
                        Drag and drop logo here, or click to select
                      </p>
                      <p className="text-sm text-gray-500">
                        Upload logo for {logoSection === "hero" ? "Hero" : "Footer"} section
                      </p>
                    </>
                  )}
                </label>
              </div>
            </div>

            {/* Current Logo Display */}
            <div className="mt-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Current Logo ({logoSection === "hero" ? "Hero" : "Footer"})
              </h3>
              {logoLoading ? (
                <div className="text-center py-12">
                  <FaSpinner className="text-4xl text-gray-400 mx-auto mb-4 animate-spin" />
                  <p className="text-gray-600">Loading logo...</p>
                </div>
              ) : (logoSection === "hero" ? heroLogo : footerLogo) ? (
                <div className="border rounded-lg overflow-hidden bg-white shadow-sm max-w-md">
                  <div className="relative group bg-gray-100 p-4">
                    <img
                      src={(logoSection === "hero" ? heroLogo : footerLogo).url}
                      alt="Logo"
                      className="w-full h-auto max-h-32 object-contain mx-auto"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity flex items-center justify-center">
                      <button
                        onClick={handleLogoDelete}
                        className="opacity-0 group-hover:opacity-100 bg-red-600 text-white p-2 rounded-lg hover:bg-red-700 transition-all"
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </div>
                  <div className="p-3 bg-gray-50 border-t">
                    <div className="flex items-center gap-1.5 min-w-0">
                      <input
                        type="text"
                        value={(logoSection === "hero" ? heroLogo : footerLogo).url}
                        readOnly
                        onClick={(e) => e.target.select()}
                        className="flex-1 min-w-0 px-2 py-1.5 bg-white border border-gray-300 rounded text-xs text-gray-800 font-mono focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <button
                        onClick={() => handleCopyUrl((logoSection === "hero" ? heroLogo : footerLogo).url, `logo-${logoSection}`)}
                        className={`shrink-0 px-2 py-1.5 rounded text-xs font-medium transition-colors whitespace-nowrap flex items-center justify-center ${
                          copiedIndex === `logo-${logoSection}`
                            ? "bg-green-600 text-white"
                            : "bg-blue-600 text-white hover:bg-blue-700"
                        }`}
                        title={copiedIndex === `logo-${logoSection}` ? "Copied!" : "Copy URL"}
                      >
                        <FaCopy className="text-xs" />
                        <span className="ml-1">
                          {copiedIndex === `logo-${logoSection}` ? "Copied" : "Copy"}
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12 text-gray-500">
                  <FaFileImage className="text-6xl mx-auto mb-4 opacity-50" />
                  <p>No logo uploaded for {logoSection === "hero" ? "Hero" : "Footer"} section yet.</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Videos Tab Content */}
        {activeTab === "videos" && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Video Management
              </h2>
              <div className="flex gap-2 mb-6">
                <button
                  onClick={() => {
                    setVideoSection("hero");
                    fetchVideos();
                  }}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    videoSection === "hero"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  Hero Section
                </button>
                <button
                  onClick={() => {
                    setVideoSection("footer");
                    fetchVideos();
                  }}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    videoSection === "footer"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  Footer Section
                </button>
              </div>

              {uploadSuccess && (
                <div className="mb-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg flex items-center">
                  <FaCheckCircle className="mr-2" />
                  Video uploaded successfully!
                </div>
              )}

              <div
                className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                  dragActive
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-300 bg-gray-50"
                }`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setDragActive(false);
                  if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
                    handleVideoUpload(e.dataTransfer.files[0]);
                  }
                }}
              >
                <input
                  type="file"
                  id="video-upload"
                  accept="video/*"
                  onChange={(e) => {
                    if (e.target.files && e.target.files[0]) {
                      handleVideoUpload(e.target.files[0]);
                    }
                  }}
                  className="hidden"
                  disabled={uploading}
                />
                <label
                  htmlFor="video-upload"
                  className="cursor-pointer flex flex-col items-center"
                >
                  {uploading ? (
                    <>
                      <FaSpinner className="text-4xl text-blue-600 mb-4 animate-spin" />
                      <p className="text-gray-600">Uploading video...</p>
                    </>
                  ) : (
                    <>
                      <FaUpload className="text-4xl text-gray-400 mb-4" />
                      <p className="text-gray-600 mb-2">
                        Drag and drop video here, or click to select
                      </p>
                      <p className="text-sm text-gray-500">
                        Upload video for {videoSection === "hero" ? "Hero" : "Footer"} section
                      </p>
                    </>
                  )}
                </label>
              </div>
            </div>

            {/* Current Video Display */}
            <div className="mt-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Current Video ({videoSection === "hero" ? "Hero" : "Footer"})
              </h3>
              {videoLoading ? (
                <div className="text-center py-12">
                  <FaSpinner className="text-4xl text-gray-400 mx-auto mb-4 animate-spin" />
                  <p className="text-gray-600">Loading video...</p>
                </div>
              ) : (videoSection === "hero" ? heroVideo : footerVideo) ? (
                <div className="border rounded-lg overflow-hidden bg-white shadow-sm max-w-2xl">
                  <div className="relative group bg-gray-100">
                    <video
                      src={(videoSection === "hero" ? heroVideo : footerVideo).url}
                      controls
                      className="w-full h-auto"
                    />
                    <div className="absolute top-2 right-2">
                      <button
                        onClick={handleVideoDelete}
                        className="bg-red-600 text-white p-2 rounded-lg hover:bg-red-700 transition-all"
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </div>
                  <div className="p-3 bg-gray-50 border-t">
                    <div className="flex items-center gap-1.5 min-w-0">
                      <input
                        type="text"
                        value={(videoSection === "hero" ? heroVideo : footerVideo).url}
                        readOnly
                        onClick={(e) => e.target.select()}
                        className="flex-1 min-w-0 px-2 py-1.5 bg-white border border-gray-300 rounded text-xs text-gray-800 font-mono focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <button
                        onClick={() => handleCopyUrl((videoSection === "hero" ? heroVideo : footerVideo).url, `video-${videoSection}`)}
                        className={`shrink-0 px-2 py-1.5 rounded text-xs font-medium transition-colors whitespace-nowrap flex items-center justify-center ${
                          copiedIndex === `video-${videoSection}`
                            ? "bg-green-600 text-white"
                            : "bg-blue-600 text-white hover:bg-blue-700"
                        }`}
                        title={copiedIndex === `video-${videoSection}` ? "Copied!" : "Copy URL"}
                      >
                        <FaCopy className="text-xs" />
                        <span className="ml-1">
                          {copiedIndex === `video-${videoSection}` ? "Copied" : "Copy"}
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12 text-gray-500">
                  <FaVideo className="text-6xl mx-auto mb-4 opacity-50" />
                  <p>No video uploaded for {videoSection === "hero" ? "Hero" : "Footer"} section yet.</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
