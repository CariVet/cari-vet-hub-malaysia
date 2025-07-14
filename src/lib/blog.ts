export interface BlogPost {
  id: string;
  title: string;
  description: string;
  content: string;
  category: string;
  date: string;
  author: string;
  readTime: string;
  image: string;
  slug: string;
}

// Sample blog posts data
export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Understanding Vaccinations: A Guide for Pet Owners',
    description: 'Learn about essential vaccinations for dogs and cats, when they should be administered, and why they\'re crucial for your pet\'s health.',
    content: `# Understanding Vaccinations: A Guide for Pet Owners

Vaccinations are one of the most important things you can do to protect your pet's health. Just like human vaccines, pet vaccines work by stimulating the immune system to produce antibodies that fight off specific diseases.

## What Are Pet Vaccines and How Do They Work?

Pet vaccines contain antigens that mimic disease-causing organisms but don't actually cause disease. When administered, these antigens stimulate your pet's immune system to produce antibodies.

## Core vs. Non-Core Vaccines

### Core Vaccines (Essential for All Pets)

**For Dogs:**
- Rabies (required by law in most areas)
- DHPP (Distemper, Hepatitis, Parvovirus, Parainfluenza)

**For Cats:**
- Rabies (required by law in most areas)
- FVRCP (Feline Viral Rhinotracheitis, Calicivirus, Panleukopenia)

### Non-Core Vaccines (Risk-Based)

These are recommended based on your pet's lifestyle and exposure risk.

## Vaccination Schedule

### Puppies and Kittens
- 6-8 weeks: First vaccines
- 10-12 weeks: Second round
- 14-16 weeks: Final puppy/kitten vaccines
- 12-16 months: First annual booster

### Adult Animals
- Annual vaccines for some vaccines like Bordetella
- Every 3 years for core vaccines after initial series

## Potential Side Effects

Most pets tolerate vaccines well, but watch for:
- Mild fever or lethargy
- Decreased appetite
- Mild swelling at injection site

Contact your vet immediately for serious side effects like difficulty breathing or facial swelling.

## The Bottom Line

Vaccinations protect your pet and the broader pet community. Work with your veterinarian to develop an appropriate vaccination schedule for your pet's needs.`,
    category: 'Preventive Care',
    date: '2024-03-15',
    author: 'CariVet Editorial Team',
    readTime: '8 min read',
    image: '/lovable-uploads/b3c42214-f42c-47c1-ac17-6c5823077ca5.png',
    slug: 'understanding-vaccinations'
  },
  {
    id: '2',
    title: 'Dental Health in Pets: More Important Than You Think',
    description: 'Discover why dental care is vital for your pet\'s overall health and learn practical tips for maintaining good oral hygiene at home.',
    content: 'Detailed content about dental health...',
    category: 'Wellness',
    date: '2024-03-20',
    author: 'CariVet Editorial Team',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901',
    slug: 'dental-health-pets'
  },
  {
    id: '3',
    title: 'Recognizing Signs of Pain in Cats: What to Look For',
    description: 'Cats are masters at hiding pain. Learn the subtle signs that indicate your feline friend is suffering and when to seek veterinary care.',
    content: 'Detailed content about cat pain signs...',
    category: 'Feline Health',
    date: '2024-03-18',
    author: 'CariVet Editorial Team',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1535268647677-300dbf3d78d1',
    slug: 'cat-pain-signs'
  },
  {
    id: '4',
    title: 'Nutrition for Senior Dogs: Adapting to Changing Needs',
    description: 'As dogs age, their nutritional requirements change. Find out how to adjust your senior dog\'s diet to support their health in their golden years.',
    content: 'Detailed content about senior dog nutrition...',
    category: 'Nutrition',
    date: '2024-03-16',
    author: 'CariVet Editorial Team',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027',
    slug: 'senior-dog-nutrition'
  }
];

export const getBlogPosts = (): BlogPost[] => {
  return blogPosts;
};

export const getBlogPost = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};

export const getFeaturedPosts = (): BlogPost[] => {
  return blogPosts.slice(0, 2);
};

export const getLatestPosts = (): BlogPost[] => {
  return blogPosts.slice(2);
};

export const getPostsByCategory = (category: string): BlogPost[] => {
  return blogPosts.filter(post => post.category === category);
};