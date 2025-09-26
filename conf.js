// basically yeh env import ke liye hai
const conf = {
    appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL), // yeh esliye kyuki .env file se import kar rahe hai aur esai hamesha string me convert karna hai
    appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwriteCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    appwriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID)
}

export default conf