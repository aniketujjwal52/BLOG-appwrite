// yeh pure services ke liye hai
import conf from '../conf/conf.js';
import { Client, Account, ID } from 'appwrite';

export class AuthService {
    client = new Client();
    account;

    constructor() { // yeh esliye use kiye kyuki jab bhi class ka object banega tab yeh constructor chalega
        this.client
            .setEndpoint(conf.appwriteUrl) 
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
    }
    //yeh method bnaye hai kyuki aapwrirte ke aandr jitne bhi services hai unko use karne ke liye humein async await ka use karna padta hai
    async createAccount({email, password, name}) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                return this.login({email, password}); // yeh isliye kiya kyuki account create karne ke baad humein login bhi karna padta hai
            } else {
                return userAccount;             
            }
        } catch (error) {
            throw error;
        }
    }
    async login({email, password}) {
        try {
            return await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            throw error;
        }
    }
    async getCurrentUser(){
        try {
            return await this.account.get(); // yeh current user ko get karta hai
        } catch (error) {
            console.log("AppWrite service error:: getCurrentUser:: ", error);            
        }
        return null; // agar user nahi hai toh null return karenge
    }
    async logout(){
        try {
            await this.account.deleteSessions('current'); // yeh current session ko delete kar dega
        } catch (error) {
            console.log("AppWrite service error:: logout:: ", error);
                        
        }
    }
}

const authService = new AuthService(); // yaha jo lowercase wala jo hai woh object hai class ka
// yeh sari chhije . esai access kr skte
export default authService;

