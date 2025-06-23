import React, { useEffect, useState } from 'react';
import { Clock, ArrowRight } from 'lucide-react';
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';

const VideoNews = () => {
  const [videoNews, setVideoNews] = useState([]);
  const [error, setError] = useState(null);

  // Format date function
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

useEffect(() => {
  const fetchPosts = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/posts");
      const data = await response.json();

      console.log("Fetched Facebook posts:", data);

     const formattedPosts = data.results.map((item, index) => ({
        id: index,
        title: item.message?.slice(0, 80) || "Untitled",
        excerpt: item.message?.slice(0, 150) || "No content",
        date: new Date(item.timestamp * 1000).toISOString(),
        link: item.url || "#",
        image: item.image?.uri || "https://via.placeholder.com/400x200",
        category: "Facebook Post"
        }));
        console.log("✅ Formatted posts: ", formattedPosts);
        setVideoNews(formattedPosts);

//       setVideoNews([
//   {
//     id: 1,
//     title: "Test Video Title",
//     excerpt: "This is a test description.",
//     date: new Date().toISOString(),
//     link: "https://facebook.com/test",
//     image: "https://via.placeholder.com/400x200",
//     category: "Test Video"
//   }
// ]);

    } catch (err) {
      console.error("Error fetching Facebook posts:", err);
    }
    console.log("✅ Raw API Data:", data);
console.log("✅ Formatted Posts:", formattedPosts);

  };

  fetchPosts();
}, []);


  return (
    <section className="all-news-section" style={{ padding: '2rem' }}>
      <div className="section-container">
        <div className="section-header" style={{ marginBottom: '1.5rem' }}>
          <h2 className="section-title">Facebook Video Feed</h2>
          <p className="section-description">
            Latest video posts fetched from Facebook via RapidAPI.
          </p>
        </div>

        {error && <p style={{ color: 'red' }}>{error}</p>}

        <div className="news-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.5rem'
        }}>
          {videoNews.map((item) => (
            <Card key={item.id} className="news-card" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <CardHeader>
                <div className="card-header-top" style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginBottom: '0.5rem'
                }}>
                  <Badge variant="outline">{item.category}</Badge>
                  <div className="date-info" style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                    <Clock size={16} className="date-icon" />
                    {formatDate(item.date)}
                  </div>
                </div>
                <CardTitle className="card-title">{item.title}</CardTitle>
              </CardHeader>

              <CardContent>
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{
                      width: '100%',
                      height: '180px',
                      objectFit: 'cover',
                      borderRadius: '10px',
                      marginBottom: '10px'
                    }}
                  />
                )}
                <CardDescription className="card-excerpt" style={{ marginBottom: '1rem' }}>
                  {item.excerpt}
                </CardDescription>
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="sm" className="read-more-link">
                    Watch Video <ArrowRight className="arrow-icon" />
                  </Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoNews;
