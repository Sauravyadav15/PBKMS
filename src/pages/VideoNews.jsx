import React, { useEffect, useState } from 'react';
import { Clock, ArrowRight } from 'lucide-react';
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { FB_POST_DATA } from '@/constants';

const VideoNews = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchPosts = async () => {
//       try {
//         const response = await fetch('http://localhost:5000/api/facebook/posts');
//         if (!response.ok) {
//           throw new Error('Failed to fetch posts');
//         }
//         const data = await response.json();
//         const formatted = data?.data?.map((post, idx) => ({
//           id: idx,
//           title: post.message?.slice(0, 70) || 'No title',
//           excerpt: post.message?.slice(0, 150) || 'No content',
//           date: post.created_time,
//           image: post.full_picture,
//           link: post.permalink_url || '#',
//           category: 'Facebook Post'
//         })) || [];
//         setPosts(formatted);
//       } catch (err) {
//         console.error(err);
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchPosts();
//   }, []);

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };
console.log("running herer", FB_POST_DATA)
//   if (loading) return <div className="p-6 text-center text-lg">Loading...</div>;
//   if (error) return <div className="p-6 text-red-500">{error}</div>;

  return (
    <section className="p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <h2 className="text-2xl font-bold">Facebook Posts</h2>
          <p className="text-gray-600">Latest posts pulled from the Facebook API</p>
        </div>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {FB_POST_DATA.map((elem)=>{
                return(
                    <div key={elem.id}>
                        {elem.title}
                        <img src={elem.imgSrc}/>
                        </div>
                )
            })}
          {/* {posts.map((post) => (
            <Card key={post.id} className="shadow-lg">
              <CardHeader>
                <div className="flex justify-between items-center mb-2">
                  <Badge>{post.category}</Badge>
                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    <Clock size={14} />
                    {formatDate(post.date)}
                  </div>
                </div>
                <CardTitle>{post.title}</CardTitle>
              </CardHeader>
              <CardContent>
                {post.image && (
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                )}
                <CardDescription className="mb-4">
                  {post.excerpt}
                </CardDescription>
                <a href={post.link} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="sm">
                    View Post <ArrowRight className="ml-2" size={16} />
                  </Button>
                </a>
              </CardContent>
            </Card>
          ))} */}
        </div>
      </div>
    </section>
  );
};

export default VideoNews;
