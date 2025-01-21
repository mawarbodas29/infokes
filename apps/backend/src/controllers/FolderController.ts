import prisma from "../../prisma/client";

export async function getFolders(id?: number) {
    const folders = await getFolderRecursive(id);
    folders.sort((a: any, b: any) => {
        if (a.fileType === "folder" && b.fileType !== "folder") return -1;
        if (a.fileType !== "folder" && b.fileType === "folder") return 1;
        return 0;
    });
    return {
        'meta': {
            success: true,
            message: "List Folder!",
        },
        'data' : {
            folders
        }
    };
}

export async function getFolderRecursive(id?: number) :Promise<any> {
    try {
        const folders = await prisma.folder.findMany({ 
            where: {
                parentId: id,
            },
        });
        return await Promise.all(
            folders.map(async (file) => {
                return {
                    ...file,
                    children: await getFolderRecursive(file.id),
                };
            })
        )
    } catch (e: unknown) {
        console.error(`Error getting Child Folder: ${e}`);
    }
}