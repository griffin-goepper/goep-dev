import { S3Client, ListObjectsV2Command, GetObjectCommand } from "@aws-sdk/client-s3";
import matter from "gray-matter";

const REGION = process.env.AMAZON_REGION!;
const BUCKET = process.env.S3_BUCKET_NAME!;
const PREFIX = "quick-thoughts/";

const s3 = new S3Client({
  region: REGION,
  credentials: {
    accessKeyId: process.env.S3_ACCESS_KEY_ID!,
    secretAccessKey: process.env.S3_SECRET_ACCESS_KEY!,
  },
});

export interface Post {
  slug: string;
  content: string;
  meta: {
    title: string;
    date: string;
    excerpt: string;
    image: string;
    category: string;
    readTime: string;
  };
  coverImageUrl: string;
}

export async function getAllPosts(): Promise<Post[]> {
  // Step 1: List all objects under quick-thoughts/
  const list = await s3.send(
    new ListObjectsV2Command({
      Bucket: BUCKET,
      Prefix: PREFIX,
      Delimiter: "/",
    })
  );

  const folders =
  list.CommonPrefixes
    ?.map((prefix) => prefix.Prefix)
    .filter((p): p is string => typeof p === "string") ?? [];


  const posts: Post[] = [];

  for (const folder of folders) {
    const slug = folder.replace(PREFIX, "").replace("/", ""); 
    const key = `${folder}index.mdx`;
  
    try {
      const object = await s3.send(
        new GetObjectCommand({
          Bucket: BUCKET,
          Key: key,
        })
      );
  
      const body = await object.Body!.transformToString();
      const { data: meta, content } = matter(body);
  
      const coverImageUrl = `https://${BUCKET}.s3.${REGION}.amazonaws.com/${folder}${meta.image}`;
  
      posts.push({
        slug, // ✅ Now this works
        content,
        meta: {
          title: meta.title,
          date: meta.date,
          excerpt: meta.excerpt,
          image: meta.image,
          category: meta.category,
          readTime: meta.readTime,
        },
        coverImageUrl,
      });
    } catch (err) {
      console.warn(`Failed to load post at ${key}:`, err);
    }
  }
  

  // Optional: Sort by date
  posts.sort((a, b) => new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime());

  return posts;
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const key = `${PREFIX}${slug}/index.mdx`;

  try {
    const object = await s3.send(
      new GetObjectCommand({
        Bucket: BUCKET,
        Key: key,
      })
    );

    const body = await object.Body!.transformToString();
    const { data: meta, content } = matter(body);

    return {
      slug,
      content,
      meta: {
        title: meta.title,
        date: meta.date,
        excerpt: meta.excerpt,
        image: meta.image,
        category: meta.category,
        readTime: meta.readTime,
      },
      coverImageUrl: `https://${BUCKET}.s3.${REGION}.amazonaws.com/${PREFIX}${slug}/${meta.image}`,
    };
  } catch (err) {
    console.error(`Error fetching post ${slug}:`, err);
    return null;
  }
}
