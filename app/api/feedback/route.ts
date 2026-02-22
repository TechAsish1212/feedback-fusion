import prisma from "@/lib/prisma";
import { syncCurrentUser } from "@/lib/sync-user";
import { error } from "console";
import { X } from "lucide-react";
import { NextRequest, NextResponse } from "next/server";

// create feedback
export async function POST(request: NextRequest) {
    try {
        const dbUser = await syncCurrentUser();
        if (!dbUser) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const body = await request.json();
        const { title, description, category } = body;
        const post = await prisma.post.create({
            data: {
                title,
                description,
                category,
                authorId: dbUser.id,
            }
        });
        return NextResponse.json(post);
    } catch (error) {
        console.error('Error occur while creating the post : ', error);
        return NextResponse.json({
            error: "Internal server error",
        }, { status: 500 })
    }
}

// fetching all the feedback
export async function GET() {
    try {
        const posts = await prisma.post.findMany({
            include: {
                author: true,
                votes: true,
            },
            orderBy: {
                createdAt: "desc"
            }
        });
        return NextResponse.json(posts);
    } catch (error) {
        console.error('Error occur while fetching the post : ', error);
        return NextResponse.json({
            error: "Internal server error",
        }, { status: 500 })
    }
}