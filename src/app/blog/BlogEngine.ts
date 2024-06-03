import fs from "fs";
import path from "path";
import frontmatter from "frontmatter";
import matter from "gray-matter";
import Markdoc from "@markdoc/markdoc";

export function getAllPostFile(): string[] {
  const folderPath = path.resolve("src/app/blog/posts");
  const dirFiles = fs.readdirSync(folderPath);
  return dirFiles;
}

export function getHTML(mFile: string): string {
  const MDcontent = readFile(mFile);
  const ast = Markdoc.parse(MDcontent);
  const content = Markdoc.transform(ast /*config*/);
  const html = Markdoc.renderers.html(content);
  return String(html);
}

export interface FrontmatterData {
  title: string;
  description: string;
  category: string;
  tags: string[];
  thumbnail: string;
  slug: string;
}

export function getMetaData(mFile: string): FrontmatterData {
  const MDcontent = readFile(mFile);
  // const frontmatter_data = frontmatter(MDcontent);
  const frontmatter_data = matter(MDcontent);
  return frontmatter_data.data as FrontmatterData;
}

function readFile(fileName: string): string {
  const mFile = path.resolve("src/app/blog/posts/", fileName);
  try {
    return fs.readFileSync(mFile, { encoding: "utf-8" });
  } catch (err) {
    console.error(err);
    return "";
  }
}
