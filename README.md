# Blogs

A simple blog website for publishing tech or thought articles.

Visit: https://blog.itskushal.com

Main: https://itskushal.com

---

### Add blog article:

- Write markdown files inside `/src/content/blog/`
- Add required fields (check `/src/content/config.ts`) to `.md` header
  ### Example:
  ```astro
  ---
  title: "Designing a Production Grade Distributed System on AWS"
  description: "Designing a production-grade distributed system on Amazon Web Services (AWS) requires deliberate architectural decisions around scalability, fault tolerance, observability, security and cost optimization."
  pubDate: 2025-11-17
  readTimeMins: 15
  draft: false
  cover: "/thumbnails/aws-prod.webp"
  slug: designing-a-production-grade-distributed-system-on-aws
  ---
  ```
- Auto blog article generation thereafter
