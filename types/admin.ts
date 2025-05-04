export interface Admin {
    id: string;
    user_id: string;
    role: 'admin' | 'superadmin';
    created_at: string;
    last_login: string;
    email: string;
  }
  
  export interface AdminSession {
    userId: string;
    role: 'admin' | 'superadmin';
    timestamp: string;
  }