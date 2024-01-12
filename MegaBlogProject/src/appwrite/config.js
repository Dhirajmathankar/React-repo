import { Client, ID, Databases, Storage , Query} from "appwrite";
import conf from "../conf/config";


export class Services{
     client = new Client();
	 databases ;
	 storage ;
	 constructor(){
		this.client
		.setEndpoint(conf.appwriteUrl)
		.setProject(conf.appwriteProjectID);
		this.databases = new Databases(this.client);
		this.storage = new Storage(this.client);
	 }

	 async createPost({title, slug, content, featuredImage, status, userId}){
        try {
            return await this.databases.createDocument(
				conf.appwriteProjectID,
				conf.appwriteCollectionID,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                }
            )
        } catch (error) {
            console.log("Appwrite serive :: createPost :: error", error);
        }
	}

	async  updatePost(slug, {title, content, featuredImage, status}){
        try {
            return await this.databases.updateDocument(
                conf.appwriteProjectID,
				conf.appwriteCollectionID,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,

                }
            )
        } catch (error) {
            console.log("Appwrite serive :: updatePost :: error", error);
        }
    }


	async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                conf.appwriteProjectID,
				conf.appwriteCollectionID,
                slug
            
            )
            return true
        } catch (error) {
            console.log("Appwrite serive :: deletePost :: error", error);
            return false
        }
    }

	async getPost(slug){
		try {
			return await this.databases.getDocument(
				conf.appwriteProjectID,
				conf.appwriteCollectionID, 
				slug , 
				);
		} catch (error) {
			throw error ;
		}
	}

	async getPosts(queries = [Query.equal("status", "active")]){
        try {
            return await this.databases.listDocuments(
				conf.appwriteProjectID,
				conf.appwriteCollectionID, 
                conf.appwriteCollectionId,
                queries,
            )
        } catch (error) {
            console.log("Appwrite serive :: getPosts :: error", error);
            return false
        }
    }

	// Upload file method

	
	async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketID,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Appwrite serive :: uploadFile :: error", error);
            return false
        }
    }

    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketID,
                fileId
            )
            return true
        } catch (error) {
            console.log("Appwrite serive :: deleteFile :: error", error);
            return false
        }
    }

    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwriteBucketID,
            fileId
        )
    }

}

const services = new Services();
export default services ;