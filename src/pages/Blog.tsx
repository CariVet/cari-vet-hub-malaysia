import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, User } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Blog = () => {
  const featuredArticles = [
    {
      id: 1,
      category: 'Preventive Care',
      date: '2024-03-15',
      title: 'Understanding Vaccinations: A Guide for Pet Owners',
      description: 'Learn about essential vaccinations for dogs and cats, when they should be administered, and why they\'re crucial for your pet\'s health.',
      author: 'CariVet Editorial Team',
      readTime: '5 min read',
      image: '/placeholder.svg'
    },
    {
      id: 2,
      category: 'Wellness',
      date: '2024-03-20',
      title: 'Dental Health in Pets: More Important Than You Think',
      description: 'Discover why dental care is vital for your pet\'s overall health and learn practical tips for maintaining good oral hygiene at home.',
      author: 'CariVet Editorial Team',
      readTime: '4 min read',
      image: '/placeholder.svg'
    }
  ];

  const latestArticles = [
    {
      id: 3,
      category: 'Feline Health',
      date: '2024-03-18',
      title: 'Recognizing Signs of Pain in Cats: What to Look For',
      description: 'Cats are masters at hiding pain. Learn the subtle signs that indicate your feline friend is suffering and when to seek veterinary care.',
      author: 'CariVet Editorial Team',
      readTime: '6 min read',
      image: '/placeholder.svg'
    },
    {
      id: 4,
      category: 'Nutrition',
      date: '2024-03-16',
      title: 'Nutrition for Senior Dogs: Adapting to Changing Needs',
      description: 'As dogs age, their nutritional requirements change. Find out how to adjust your senior dog\'s diet to support their health in their golden years.',
      author: 'CariVet Editorial Team',
      readTime: '7 min read',
      image: '/placeholder.svg'
    },
    {
      id: 5,
      category: 'Preventive Care',
      date: '2024-03-12',
      title: 'Parasite Prevention: Protecting Your Pet Year-Round',
      description: 'Learn about common parasites that can affect your pets, their potential health impacts, and effective prevention strategies for all seasons.',
      author: 'CariVet Editorial Team',
      readTime: '5 min read',
      image: '/placeholder.svg'
    },
    {
      id: 6,
      category: 'Behavior',
      date: '2024-03-10',
      title: 'Managing Anxiety in Pets: From Thunderstorms to Separation',
      description: 'Discover effective strategies to help pets cope with various anxiety triggers and learn when it\'s time to consider professional help.',
      author: 'CariVet Editorial Team',
      readTime: '8 min read',
      image: '/placeholder.svg'
    }
  ];

  const categories = [
    'Preventive Care',
    'Wellness',
    'Feline Health',
    'Nutrition',
    'Behavior'
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      'Preventive Care': 'bg-emerald-100 text-emerald-800',
      'Wellness': 'bg-blue-100 text-blue-800',
      'Feline Health': 'bg-purple-100 text-purple-800',
      'Nutrition': 'bg-orange-100 text-orange-800',
      'Behavior': 'bg-pink-100 text-pink-800'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-primary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Veterinary Blog
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Expert insights and advice on pet health, wellness, and care
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Featured Articles */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6">Featured Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {featuredArticles.map((article) => (
                  <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="aspect-video bg-muted">
                      <img 
                        src={article.image} 
                        alt={article.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge className={getCategoryColor(article.category)}>
                          {article.category}
                        </Badge>
                        <span className="text-sm text-muted-foreground flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {new Date(article.date).toLocaleDateString()}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-foreground hover:text-primary transition-colors">
                        {article.title}
                      </h3>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4 text-sm">
                        {article.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <User className="w-3 h-3" />
                            {article.author}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {article.readTime}
                          </span>
                        </div>
                        <Button variant="outline" size="sm">
                          Read more
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Latest Articles */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-6">Latest Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {latestArticles.map((article) => (
                  <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="aspect-video bg-muted">
                      <img 
                        src={article.image} 
                        alt={article.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge className={getCategoryColor(article.category)}>
                          {article.category}
                        </Badge>
                        <span className="text-sm text-muted-foreground flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {new Date(article.date).toLocaleDateString()}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-foreground hover:text-primary transition-colors">
                        {article.title}
                      </h3>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4 text-sm">
                        {article.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <User className="w-3 h-3" />
                            {article.author}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {article.readTime}
                          </span>
                        </div>
                        <Button variant="outline" size="sm">
                          Read more
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <h3 className="text-lg font-semibold">Categories</h3>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      className="block w-full text-left px-3 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-accent rounded-md transition-colors"
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Blog;