interface Screenshot {
  id: string;
  url: string;
  portfolioId: string;
  createdAt: string;
}

export interface Portfolio {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  liveDemoUrl: string;
  githubUrl: string;
  createdAt: string;
  updatedAt: string;
  categoryId: string;
  screenshots: Screenshot[];
}
