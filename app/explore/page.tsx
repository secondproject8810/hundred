"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Briefcase, Settings, TrendingUp, Plus, Heart, MessageCircle, BookmarkIcon, MoreHorizontal, CornerUpRight, Share, Trash2, Flag, X } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useState } from "react"

export default function ExplorePage() {
  // Feed state management
  const [likedPosts, setLikedPosts] = useState<Set<string>>(new Set())
  const [savedPosts, setSavedPosts] = useState<Set<string>>(new Set())
  const [selectedPost, setSelectedPost] = useState<any>(null)
  const [newComment, setNewComment] = useState("")
  const [shareModalPost, setShareModalPost] = useState<any>(null)
  const [deleteModalPost, setDeleteModalPost] = useState<any>(null)
  const [reportModalPost, setReportModalPost] = useState<any>(null)
  const [reportReason, setReportReason] = useState("")

  const toggleLike = (postId: string) => {
    setLikedPosts(prev => {
      const newLikedPosts = new Set(prev)
      if (newLikedPosts.has(postId)) {
        newLikedPosts.delete(postId)
      } else {
        newLikedPosts.add(postId)
      }
      return newLikedPosts
    })
  }

  const toggleSave = (postId: string) => {
    setSavedPosts(prev => {
      const newSavedPosts = new Set(prev)
      if (newSavedPosts.has(postId)) {
        newSavedPosts.delete(postId)
      } else {
        newSavedPosts.add(postId)
      }
      return newSavedPosts
    })
  }

  const handlePostClick = (post: any) => {
    setSelectedPost(post)
  }

  const handleAddComment = () => {
    if (newComment.trim()) {
      console.log('Adding comment:', newComment)
      setNewComment("")
    }
  }

  const handleShare = (post: any) => {
    setShareModalPost(post)
  }

  const handleDelete = (post: any) => {
    setDeleteModalPost(post)
  }

  const handleReport = (post: any) => {
    setReportModalPost(post)
    setReportReason("")
  }

  const confirmDelete = () => {
    console.log('Deleting post:', deleteModalPost)
    setDeleteModalPost(null)
  }

  const submitReport = () => {
    console.log('Reporting post:', reportModalPost, 'Reason:', reportReason)
    setReportModalPost(null)
    setReportReason("")
  }

  // Sample post data
  const posts = [
    {
      id: 'post-1',
      author: 'Carl Livingston',
      title: 'Computer Science · Stanford University · 2024',
      timeAgo: '2 hours ago',
      avatar: '/placeholder-user.jpg',
      content: `Just finished my final interview round at Google! 🎉 The preparation was intense, but these interview tips from the 100 Networks community were game-changers. 
      
Key takeaways that helped me:
• Research the company culture deeply
• Practice behavioral questions with real examples
• Ask thoughtful questions about the role

Grateful for this amazing community! 💙`,
      image: '/campus-walk.png',
      imageTitle: '5 Interview Tips That Actually Work',
      imageDescription: 'Transform your interview game with research-backed strategies...',
      imageSource: '100networks.com',
      likes: 127,
      commentsCount: 23,
      comments: [
        {
          id: 1,
          author: 'Sarah Johnson',
          avatar: '/placeholder-user.jpg',
          content: 'Congratulations Carl! Your journey has been so inspiring to follow. Google is lucky to have you!',
          timeAgo: '1 hour ago',
          likes: 8
        },
        {
          id: 2,
          author: 'Mike Chen',
          avatar: '/placeholder-user.jpg',
          content: 'Those tips are gold! Especially the one about asking thoughtful questions. It really shows you\'re genuinely interested.',
          timeAgo: '45 minutes ago',
          likes: 12
        }
      ]
    },
    {
      id: 'post-2',
      author: 'Ian Arruda, MPM, CAPM',
      title: 'Arizona State University · Project Management',
      timeAgo: '1 day ago',
      avatar: '/placeholder.svg?height=40&width=40',
      content: `🎓 I finally did it! After two years of balancing work, studies, and life, I've earned my Master of Project Management degree from Arizona State University.

This journey taught me that persistence pays off. Thank you to everyone who supported me along the way – mentors, classmates, and the incredible 100 Networks community! 

Next chapter: Leading impactful projects and helping others achieve their goals. 🚀`,
      likes: 89,
      commentsCount: 12,
      comments: [
        {
          id: 1,
          author: 'Jessica Williams',
          avatar: '/placeholder-user.jpg',
          content: 'Amazing achievement Ian! Your dedication really paid off. Excited to see what projects you lead next!',
          timeAgo: '20 hours ago',
          likes: 6
        }
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-5xl mx-auto px-6 py-6">
        {/* Greeting Section */}
        <div className="mb-6">
          <h1 className="text-2xl font-medium text-gray-900">Hi Aryan,</h1>
        </div>
        
        {/* Main Container with Welcome and Two Cards */}
        <div className="bg-gray-50 rounded-xl p-5 mb-8">
          <div className="grid lg:grid-cols-3 gap-5">
            {/* Welcome Section */}
            <div className="lg:col-span-1">
              <h2 className="text-lg font-medium text-gray-900 mb-2">Welcome,</h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                Begin your journey with us!<br />
                Here are a few easy steps to<br />
                help you get started.
              </p>
              </div>
              
            {/* Two Main Containers */}
            <div className="lg:col-span-2 grid md:grid-cols-2 gap-4">
              {/* Recommended Jobs Container */}
              <Card className="bg-white border border-gray-200 hover:border-gray-300 transition-colors">
                <CardContent className="p-4">
                  <div className="flex items-center mb-3">
                    <div className="bg-blue-50 p-1.5 rounded-md mr-2">
                      <Briefcase className="h-4 w-4 text-blue-600" />
                    </div>
                    <span className="text-xs text-gray-500">31,821 Openings</span>
              </div>
              
                  <h3 className="text-base font-medium text-gray-900 mb-2">Recommended Jobs</h3>
                  <p className="text-gray-600 text-xs mb-4 leading-relaxed">
                    Find your ideal job match from curated opportunities.
                  </p>
                  
                  <Link href="/jobs">
                    <Button size="sm" className="w-full bg-gray-900 hover:bg-gray-800 text-white text-xs font-medium py-2 rounded-md">
                      VIEW JOBS
              </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Career Preferences Container */}
              <Card className="bg-white border border-gray-200 hover:border-gray-300 transition-colors">
                <CardContent className="p-4">
                  <div className="flex items-center mb-3">
                    <div className="bg-green-50 p-1.5 rounded-md mr-2">
                      <Settings className="h-4 w-4 text-green-600" />
            </div>
              </div>
              
                  <h3 className="text-base font-medium text-gray-900 mb-2">Career Preferences</h3>
                  <p className="text-gray-600 text-xs mb-4 leading-relaxed">
                    Set preferences to receive personalized recommendations.
                  </p>
                  
                  <Button size="sm" className="w-full bg-gray-900 hover:bg-gray-800 text-white text-xs font-medium py-2 rounded-md">
                    SET PREFERENCES
            </Button>
                </CardContent>
              </Card>
          </div>
        </div>
      </div>

        {/* Success Metrics Section */}
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-5 border border-gray-100 mb-12">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="bg-white p-2 rounded-lg mr-4 shadow-sm">
                <TrendingUp className="h-6 w-6 text-purple-600" />
            </div>
              <div>
                <h3 className="text-base font-medium text-gray-900 mb-1">
                  Helped 1,247 professionals land their dream jobs
                </h3>
                <p className="text-sm text-gray-600">
                  23 placements completed this week
                </p>
                        </div>
                      </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-purple-600">1.2K+</div>
              </div>
            </div>
          </div>

        {/* Community Feed Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div className="text-left">
              <h2 className="text-2xl font-medium text-gray-900 mb-2">What's Happening Today?</h2>
            </div>
            <Link href="/create-post">
              <Button className="bg-gray-900 hover:bg-gray-800 text-white rounded-full px-6 py-2 shadow-lg hover:shadow-xl transition-all duration-200 font-medium text-sm flex items-center">
                <Plus className="h-4 w-4 mr-2" />
                New Post
              </Button>
              </Link>
            </div>

          {/* Feed Posts */}
          <div className="space-y-6">
            {posts.map((post) => (
              <div key={post.id} className="bg-white hover:bg-slate-50/50 transition-all duration-200 cursor-pointer border-b border-slate-100 pb-6">
                <div className="p-0" onClick={() => handlePostClick(post)}>
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex space-x-3 flex-1 min-w-0">
                      <Avatar className="w-12 h-12 flex-shrink-0">
                        <AvatarImage src={post.avatar} alt="User" />
                        <AvatarFallback className="bg-blue-50 text-blue-600 font-medium text-sm">
                          {post.author.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                        <div className="min-w-0 flex-1">
                        <div className="font-medium text-base text-gray-900 truncate">{post.author}</div>
                        <div className="text-sm text-slate-500 line-clamp-2">{post.title}</div>
                        <div className="text-xs text-slate-400 mt-1">{post.timeAgo}</div>
                        </div>
                      </div>
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-slate-400 hover:text-gray-900 transition-all duration-200 h-8 w-8 flex-shrink-0" 
                        onClick={(e) => {
                          e.stopPropagation()
                          handleShare(post)
                        }}
                      >
                        <CornerUpRight className="h-5 w-5" />
                      </Button>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" className="text-slate-400 hover:text-slate-600 h-8 w-8 flex-shrink-0" onClick={(e) => e.stopPropagation()}>
                            <MoreHorizontal className="h-5 w-5" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-48">
                          <DropdownMenuItem onClick={(e) => { e.stopPropagation(); handleShare(post); }} className="cursor-pointer">
                            <Share className="h-4 w-4 mr-2" />
                            Share post
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={(e) => { e.stopPropagation(); handleDelete(post); }} className="cursor-pointer text-red-600 hover:text-red-700">
                            <Trash2 className="h-4 w-4 mr-2" />
                            Delete post
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={(e) => { e.stopPropagation(); handleReport(post); }} className="cursor-pointer">
                            <Flag className="h-4 w-4 mr-2" />
                            Report post
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
            </div>
          </div>

                  <div className="mb-4">
                    <p className="text-slate-700 leading-relaxed text-sm">
                      {post.content.length > 200 ? `${post.content.substring(0, 200)}...` : post.content}
                    </p>
            </div>

                  {post.image && (
                    <div className="rounded-xl overflow-hidden border border-slate-100 mb-4">
                      <img src={post.image} alt="Post content" className="w-full h-40 object-cover" />
                      {post.imageTitle && (
                        <div className="p-4 bg-slate-50">
                          <h3 className="font-medium text-base text-gray-900 mb-1">{post.imageTitle}</h3>
                          <p className="text-sm text-slate-600 line-clamp-2">{post.imageDescription}</p>
                          <p className="text-sm text-blue-600 mt-1 font-medium">{post.imageSource}</p>
                              </div>
                            )}
                          </div>
                  )}

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-6 text-slate-500">
                      <span className="text-sm">{post.likes} likes • {post.commentsCount} comments</span>
                        </div>
                    <div className="flex space-x-4">
                      <Button
                        variant="ghost"
                        size="lg" 
                        className={`hover:bg-transparent transition-all duration-200 p-3 ${
                          likedPosts.has(post.id) 
                            ? 'text-red-500' 
                            : 'text-slate-600 hover:text-red-500'
                        }`}
                        onClick={(e) => {
                          e.stopPropagation()
                          toggleLike(post.id)
                        }}
                      >
                        <Heart className={`h-7 w-7 transition-all duration-200 stroke-[2.5] ${
                          likedPosts.has(post.id) ? 'fill-red-500' : ''
                        }`} />
                      </Button>
                <Button
                  variant="ghost"
                        size="lg" 
                        className="text-slate-600 hover:text-gray-900 hover:bg-transparent transition-all duration-200 p-3"
                        onClick={(e) => {
                          e.stopPropagation()
                          handlePostClick(post)
                        }}
                      >
                        <MessageCircle className="h-7 w-7 stroke-[2.5]" />
                </Button>
                <Button
                  variant="ghost"
                        size="lg" 
                        className={`hover:bg-transparent transition-all duration-200 p-3 ${
                          savedPosts.has(post.id) 
                            ? 'text-blue-600' 
                            : 'text-slate-600 hover:text-blue-600'
                        }`}
                        onClick={(e) => {
                          e.stopPropagation()
                          toggleSave(post.id)
                        }}
                      >
                        <BookmarkIcon className={`h-7 w-7 transition-all duration-200 stroke-[2.5] ${
                          savedPosts.has(post.id) ? 'fill-blue-600' : ''
                        }`} />
                </Button>
              </div>
            </div>
                    </div>
                      </div>
                    ))}

            {/* Community Spotlight Card */}
            <div className="rounded-2xl bg-gradient-to-r from-gray-900 to-gray-700 text-white mt-8">
              <div className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl flex-shrink-0">
                    <span className="text-2xl">✨</span>
                      </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-lg mb-2">Welcome to the Community Feed!</h3>
                    <p className="text-white/80 leading-relaxed mb-4 text-sm">
                      Follow thousands of students and professionals. Share your journey, get advice, and discover opportunities that align with your goals.
                    </p>
                    <Link href="/create-post">
                <Button 
                        variant="secondary" 
                        className="bg-white text-gray-900 hover:bg-gray-100 rounded-full font-medium px-6 py-2 text-sm"
                >
                        Share Your Story
                </Button>
                    </Link>
              </div>
                  <Button variant="ghost" size="icon" className="text-white/70 hover:text-white hover:bg-white/10 h-8 w-8 flex-shrink-0">
                    <X className="h-5 w-5" />
                  </Button>
            </div>
          </div>
        </div>
      </div>
                  </div>
                </div>

      {/* Modals remain the same - Share, Delete, Report, Post Detail */}
      {/* Share Modal */}
      {shareModalPost && (
        <Dialog open={!!shareModalPost} onOpenChange={() => setShareModalPost(null)}>
          <DialogContent className="max-w-[500px] max-h-[80vh] p-0 bg-white rounded-xl shadow-2xl border-0 overflow-hidden">
            <DialogHeader className="p-4 border-b border-slate-100">
              <DialogTitle className="font-medium text-base text-gray-900">Share Post</DialogTitle>
            </DialogHeader>
            <div className="p-4">
              <p className="text-sm text-gray-600 mb-4">Share this post with your network</p>
              <div className="flex gap-3">
                <Button onClick={() => setShareModalPost(null)} variant="outline" className="flex-1">
              Cancel
            </Button>
                <Button onClick={() => setShareModalPost(null)} className="flex-1 bg-gray-900 hover:bg-gray-800">
                  Share
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
      )}

      {/* Delete Modal */}
      {deleteModalPost && (
        <Dialog open={!!deleteModalPost} onOpenChange={() => setDeleteModalPost(null)}>
          <DialogContent className="max-w-[500px] p-0 bg-white rounded-xl shadow-2xl border-0">
            <DialogHeader className="p-4 border-b border-slate-100">
              <DialogTitle className="font-medium text-base text-gray-900">Delete Post</DialogTitle>
        </DialogHeader>
            <div className="p-4">
              <p className="text-sm text-gray-600 mb-4">Are you sure you want to delete this post? This action cannot be undone.</p>
              <div className="flex gap-3">
                <Button onClick={() => setDeleteModalPost(null)} variant="outline" className="flex-1">
                  Cancel
                </Button>
                <Button onClick={confirmDelete} variant="destructive" className="flex-1">
                  Delete
                </Button>
                  </div>
                </div>
          </DialogContent>
        </Dialog>
      )}

      {/* Report Modal */}
      {reportModalPost && (
        <Dialog open={!!reportModalPost} onOpenChange={() => setReportModalPost(null)}>
          <DialogContent className="max-w-[500px] p-0 bg-white rounded-xl shadow-2xl border-0">
            <DialogHeader className="p-4 border-b border-slate-100">
              <DialogTitle className="font-medium text-base text-gray-900">Report Post</DialogTitle>
            </DialogHeader>
            <div className="p-4">
              <div className="space-y-4">
                <p className="text-sm text-gray-600">Why are you reporting this post?</p>
                <div className="space-y-2">
                  {[
                    'Inappropriate content',
                    'Spam or misleading',
                    'Harassment or bullying',
                    'False information'
                  ].map((reason) => (
                    <label key={reason} className="flex items-center space-x-3 cursor-pointer p-2 rounded-lg hover:bg-slate-50">
                      <input
                        type="radio"
                        name="reportReason"
                        value={reason}
                        checked={reportReason === reason}
                        onChange={(e) => setReportReason(e.target.value)}
                        className="text-blue-600 focus:ring-blue-600"
                      />
                      <span className="text-sm text-slate-700">{reason}</span>
                    </label>
                  ))}
          </div>
                <div className="flex gap-3 pt-4">
                  <Button onClick={() => setReportModalPost(null)} variant="outline" className="flex-1">
              Cancel
            </Button>
                  <Button onClick={submitReport} disabled={!reportReason} className="flex-1 bg-gray-900 hover:bg-gray-800">
                    Submit Report
            </Button>
                </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
      )}

      {/* Post Detail Modal */}
      {selectedPost && (
        <Dialog open={!!selectedPost} onOpenChange={() => setSelectedPost(null)}>
          <DialogContent className="max-w-[90%] md:max-w-[70%] max-h-[90vh] p-0 bg-white rounded-2xl shadow-2xl border-0 overflow-hidden">
            <div className="flex flex-col h-full max-h-[90vh]">
              <DialogHeader className="p-6 border-b border-slate-100 flex-shrink-0">
                <div className="flex items-center space-x-4">
                  <Avatar className="w-12 h-12 flex-shrink-0">
                    <AvatarImage src={selectedPost.avatar} alt="User" />
                    <AvatarFallback className="bg-blue-50 text-blue-600 font-medium">
                      {selectedPost.author.split(' ').map((n: string) => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="min-w-0 flex-1">
                    <DialogTitle className="font-medium text-lg text-gray-900 truncate">{selectedPost.author}</DialogTitle>
                    <p className="text-sm text-slate-500 line-clamp-2">{selectedPost.title}</p>
                    <p className="text-xs text-slate-400 mt-1">{selectedPost.timeAgo}</p>
              </div>
                </div>
              </DialogHeader>

              <div className="flex-1 overflow-y-auto">
                <div className="p-6">
                  <div className="mb-6">
                    <p className="text-slate-700 leading-relaxed text-sm whitespace-pre-line">
                      {selectedPost.content}
                    </p>
              </div>

                  {selectedPost.image && (
                    <div className="rounded-xl overflow-hidden border border-slate-100 mb-6">
                      <img src={selectedPost.image} alt="Post content" className="w-full h-64 object-cover" />
                      {selectedPost.imageTitle && (
                        <div className="p-4 bg-slate-50">
                          <h3 className="font-medium text-lg text-gray-900 mb-2">{selectedPost.imageTitle}</h3>
                          <p className="text-sm text-slate-600">{selectedPost.imageDescription}</p>
                          <p className="text-sm text-blue-600 mt-2 font-medium">{selectedPost.imageSource}</p>
                </div>
                      )}
              </div>
                  )}

                  <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-6">
                    <span className="text-slate-500 text-sm">{selectedPost.likes} likes • {selectedPost.commentsCount} comments</span>
                    <div className="flex space-x-4">
                <Button 
                        variant="ghost" 
                        size="lg" 
                        className={`hover:bg-transparent transition-all duration-200 p-2 ${
                          likedPosts.has(selectedPost.id) 
                            ? 'text-red-500' 
                            : 'text-slate-600 hover:text-red-500'
                        }`}
                        onClick={() => toggleLike(selectedPost.id)}
                      >
                        <Heart className={`h-6 w-6 transition-all duration-200 stroke-[2.5] ${
                          likedPosts.has(selectedPost.id) ? 'fill-red-500' : ''
                        }`} />
                </Button>
                <Button 
                        variant="ghost" 
                        size="lg" 
                        className={`hover:bg-transparent transition-all duration-200 p-2 ${
                          savedPosts.has(selectedPost.id) 
                            ? 'text-blue-600' 
                            : 'text-slate-600 hover:text-blue-600'
                        }`}
                        onClick={() => toggleSave(selectedPost.id)}
                      >
                        <BookmarkIcon className={`h-6 w-6 transition-all duration-200 stroke-[2.5] ${
                          savedPosts.has(selectedPost.id) ? 'fill-blue-600' : ''
                        }`} />
                </Button>
              </div>
            </div>

                  <div>
                    <h3 className="font-medium text-lg text-gray-900 mb-4">Comments</h3>
                    
                    <div className="flex space-x-3 mb-6">
                      <Avatar className="w-10 h-10 flex-shrink-0">
                        <AvatarImage src="/placeholder-user.jpg" alt="You" />
                        <AvatarFallback className="bg-blue-50 text-blue-600 font-medium text-sm">YU</AvatarFallback>
                      </Avatar>
                    <div className="flex-1">
                        <Textarea
                          placeholder="Write a comment..."
                          value={newComment}
                          onChange={(e) => setNewComment(e.target.value)}
                          className="min-h-[80px] resize-none border-slate-200 text-sm rounded-xl"
                        />
                        <div className="flex justify-end mt-2">
                          <Button
                            onClick={handleAddComment}
                            disabled={!newComment.trim()}
                            size="sm"
                            className="bg-gray-900 hover:bg-gray-800 text-white rounded-full px-4 py-2 text-sm"
                          >
                            Comment
                          </Button>
                        </div>
                        </div>
                        </div>

                    <div className="space-y-4">
                      {selectedPost.comments.map((comment: any) => (
                        <div key={comment.id} className="flex space-x-3">
                          <Avatar className="w-10 h-10 flex-shrink-0">
                            <AvatarImage src={comment.avatar} alt={comment.author} />
                            <AvatarFallback className="bg-blue-50 text-blue-600 font-medium text-sm">
                              {comment.author.split(' ').map((n: string) => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1 bg-slate-50 rounded-xl p-4">
                            <div className="flex items-center justify-between mb-2">
                              <div className="font-medium text-gray-900 text-sm">{comment.author}</div>
                              <div className="text-xs text-slate-400">{comment.timeAgo}</div>
                        </div>
                            <p className="text-slate-700 text-sm leading-relaxed mb-2">
                              {comment.content}
                            </p>
                            <div className="flex items-center space-x-4">
                              <Button variant="ghost" size="sm" className="text-slate-500 hover:text-red-500 hover:bg-transparent p-1">
                                <Heart className="h-4 w-4 mr-1" />
                                <span className="text-xs">{comment.likes}</span>
                              </Button>
                              <Button variant="ghost" size="sm" className="text-slate-500 hover:text-gray-900 hover:bg-transparent p-1 text-xs">
                                Reply
                              </Button>
                        </div>
                        </div>
                      </div>
                      ))}
                    </div>
                  </div>
                  </div>
      </div>
    </div>
      </DialogContent>
    </Dialog>
      )}
    </div>
  )
}
