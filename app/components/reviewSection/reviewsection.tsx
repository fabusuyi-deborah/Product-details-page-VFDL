"use client"
import type React from "react"
import { useState } from "react"
import { Star, ThumbsUp, ThumbsDown, ChevronDown, ChevronLeft, ChevronRight, Menu, X } from "lucide-react"

interface Review {
  id: string
  author: string
  avatar: string
  rating: number
  date: string
  comment: string
  likes: number
  hasPhoto: boolean
  hasVideo: boolean
}

export default function ProductReviews(): React.ReactElement {
  const [selectedTab, setSelectedTab] = useState<string>("all")
  const [selectedRating, setSelectedRating] = useState<number | null>(null)
  const [selectedTopics, setSelectedTopics] = useState<string[]>([])
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const reviews: Review[] = [
    {
      id: "1",
      author: "Darrell Steward",
      avatar: "/avatar1.jpg",
      rating: 5,
      date: "July 3, 2023 2:23 PM",
      comment: "This is amazing product I have.",
      likes: 38,
      hasPhoto: false,
      hasVideo: false,
    },
    {
      id: "2",
      author: "Darene Robertson",
      avatar: "/avatar2.jpg",
      rating: 5,
      date: "July 3, 2023 2:23 PM",
      comment: "This is amazing product I have.",
      likes: 92,
      hasPhoto: false,
      hasVideo: false,
    },
    {
      id: "3",
      author: "Kathryn Murphy",
      avatar: "/avatar3.jpg",
      rating: 5,
      date: "July 3, 2023 2:23 AM",
      comment: "This is amazing product I have.",
      likes: 17,
      hasPhoto: false,
      hasVideo: false,
    },
    {
      id: "4",
      author: "Ronald Richards",
      avatar: "/avatar4.jpg",
      rating: 5,
      date: "July 3, 2023 2:23 AM",
      comment: "This is amazing product I have.",
      likes: 104,
      hasPhoto: false,
      hasVideo: false,
    },
  ]

  const ratingDistribution = [
    { stars: 5, count: 2923, percentage: 95 },
    { stars: 4, count: 38, percentage: 3 },
    { stars: 3, count: 4, percentage: 1 },
    { stars: 2, count: 0, percentage: 0 },
    { stars: 1, count: 0, percentage: 0 },
  ]

  const topics = ["Product Quality", "Seller Services", "Product Price", "Shipment", "Match with Description"]

  const toggleTopic = (topic: string) => {
    setSelectedTopics((prev) => (prev.includes(topic) ? prev.filter((t) => t !== topic) : [...prev, topic]))
  }

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-0.5">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-4 h-4 ${star <= rating ? "fill-orange-400 text-orange-400" : "fill-gray-200 text-gray-200"}`}
          />
        ))}
      </div>
    )
  }

  return (
    <div className="w-full bg-white min-h-screen p-4 md:p-8">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-gray-900">Product Reviews</h2>
        <button onClick={() => setSidebarOpen(!sidebarOpen)} className="md:hidden p-2 hover:bg-gray-100 rounded-lg">
          {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 max-w-7xl">
        <div className={`${sidebarOpen ? "block" : "hidden"} md:block md:col-span-3 space-y-6`}>
          <div className="bg-white rounded-lg p-4 md:p-6 border border-gray-200">
            <button className="w-full flex items-center justify-between mb-4">
              <span className="font-semibold text-gray-900">Reviews Filter</span>
              <ChevronDown className="w-5 h-5" />
            </button>

            <div className="space-y-3">
              <p className="text-xs font-semibold text-gray-700 uppercase">Rating</p>
              <div className="space-y-2">
                {[5, 4, 3, 2, 1].map((rating) => (
                  <label key={rating} className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-1 rounded">
                    <input
                      type="checkbox"
                      checked={selectedRating === rating}
                      onChange={() => setSelectedRating(selectedRating === rating ? null : rating)}
                      className="w-4 h-4 accent-orange-400"
                    />
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-gray-700">{rating}</span>
                        <Star className="w-4 h-4 fill-orange-400 text-orange-400" />
                      </div>
                      <span className="text-sm text-gray-500">
                        {ratingDistribution.find((r) => r.stars === rating)?.count ?? ""}
                      </span>
                    </div>
                  </label>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-4 md:p-6 border border-gray-200">
            <button className="w-full flex items-center justify-between mb-4">
              <span className="font-semibold text-gray-900">Review Topics</span>
              <ChevronDown className="w-5 h-5" />
            </button>
            <div className="space-y-2">
              {topics.map((topic) => (
                <label key={topic} className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-1 rounded">
                  <input
                    type="checkbox"
                    checked={selectedTopics.includes(topic)}
                    onChange={() => toggleTopic(topic)}
                    className="w-4 h-4 accent-orange-400"
                  />
                  <span className="text-sm text-gray-700">{topic}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        <div className="col-span-1 md:col-span-9 space-y-6">
          <div className="bg-white rounded-lg p-4 md:p-6 border border-gray-200">
            <div className="flex flex-col md:flex-row gap-6 md:gap-8">
              <div className="flex flex-col items-center shrink-0">
                <div className="w-20 h-20 rounded-full border-4 border-orange-400 flex items-center justify-center mb-2">
                  <span className="text-3xl font-bold text-gray-900">4.5</span>
                </div>
                {renderStars(5)}
                <p className="text-xs text-gray-600 mt-2 text-center">From 1240 reviews</p>
              </div>

              <div className="flex-1 space-y-2">
                {ratingDistribution.map((item) => (
                  <div key={item.stars} className="flex items-center gap-2 md:gap-3">
                    <span className="text-sm text-gray-700 w-8">{item.stars}.0</span>
                    <Star className="w-4 h-4 fill-orange-400 text-orange-400 shrink-0" />
                    <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-black" style={{ width: `${item.percentage}%` }} />
                    </div>
                    <span className="text-sm text-gray-600 w-12 text-right">{item.count}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200">
            <div className="flex gap-2 md:gap-6 border-b border-gray-200 px-4 md:px-6 pt-4 md:pt-6 overflow-x-auto">
              <button
                onClick={() => setSelectedTab("all")}
                className={`pb-3 font-medium transition-colors text-xs md:text-sm whitespace-nowrap ${
                  selectedTab === "all"
                    ? "text-gray-900 border-b-2 border-black"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                All Reviews
              </button>
              <button
                onClick={() => setSelectedTab("photo")}
                className={`pb-3 font-medium transition-colors text-xs md:text-sm whitespace-nowrap ${
                  selectedTab === "photo"
                    ? "text-gray-900 border-b-2 border-black"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                With Photo & Video
              </button>
              <button
                onClick={() => setSelectedTab("description")}
                className={`pb-3 font-medium transition-colors text-xs md:text-sm whitespace-nowrap ${
                  selectedTab === "description"
                    ? "text-gray-900 border-b-2 border-black"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                With Description
              </button>
            </div>

            <div className="p-4 md:p-6 space-y-4">
              {reviews.map((review) => (
                <div key={review.id} className="pb-4 border-b border-gray-200 last:border-b-0 last:pb-0">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 md:gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 rounded-full bg-blue-400 flex items-center justify-center shrink-0">
                          <span className="text-sm font-medium text-white">
                            {review.author
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </span>
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold text-gray-900 text-sm">{review.author}</p>
                          <p className="text-xs text-gray-500">{review.date}</p>
                        </div>
                      </div>

                      <p className="text-gray-700 text-sm mb-3">{review.comment}</p>
                    </div>

                    <div className="shrink-0">{renderStars(review.rating)}</div>
                  </div>

                  <div className="flex items-center justify-between md:justify-end gap-4 md:gap-4 mt-3">
                    <div />
                    <div className="flex items-center gap-4">
                      <button className="flex items-center gap-1 text-xs text-gray-600 hover:text-gray-900">
                        <ThumbsUp className="w-4 h-4" />
                        <span>{review.likes}</span>
                      </button>
                      <button className="flex items-center gap-1 text-xs text-gray-600 hover:text-gray-900">
                        <ThumbsDown className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-center gap-2 p-4 md:p-6 border-t border-gray-200 overflow-x-auto">
              <button className="w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-50 text-gray-600 shrink-0">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button className="w-10 h-10 rounded-lg bg-black text-white flex items-center justify-center font-medium text-sm shrink-0">
                1
              </button>
              <button className="w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-50 font-medium text-sm text-gray-600 shrink-0">
                2
              </button>
              <span className="text-gray-400">...</span>
              <button className="w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-50 font-medium text-sm text-gray-600 shrink-0">
                10
              </button>
              <button className="w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-50 text-gray-600 hrink-0">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
