'use client';
import { useRouter } from 'next/navigation';
import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from 'react';

type loginParameters = {
  email: string;
  password: string;
};

type UserContextType = {
  userEmail: string;
  setUserEmail: (u: string) => void;
  userPassword: string;
  setUserPassword: (p: string) => void;
  userRole: string;
  setUserRole: (r: string) => void;
  logout: () => void;
  login: (data: loginParameters) => void;
  isAuthenticated: boolean;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export function getFromLocalStorage(key: string, fallback = '') {
  if (typeof window === 'undefined') return fallback;
  return localStorage.getItem(key) || fallback;
}

export function UserDataProvider({ children }: { children: ReactNode }) {
  const [userEmail, setUserEmail] = useState<string>(() =>
    getFromLocalStorage('userEmail'),
  );

  const [userPassword, setUserPassword] = useState<string>(() =>
    getFromLocalStorage('userPassword'),
  );

  const [userRole, setUserRole] = useState<string>(() =>
    getFromLocalStorage('userRole'),
  );

  const router = useRouter();

  const login = (values: loginParameters) => {
    setUserEmail(values.email);
    setUserPassword(values.password);
    localStorage.setItem('userEmail', values.email);
    localStorage.setItem('userPassword', values.password);
    if (
      values.email === 'headoffice@gmail.com' &&
      values.password === 'head@123'
    ) {
      setUserRole('HOHead');
      localStorage.setItem('userRole', 'HOHead');
      router.push('/hohead');
    } else if (
      values.email === 'headoffice@gmail.com' &&
      values.password === 'staff@123'
    ) {
      setUserRole('HOStaff');
      localStorage.setItem('userRole', 'HOStaff');
      router.push('/hostaff');
    } else if (
      values.email === 'branchoffice@gmail.com' &&
      values.password === 'head@123'
    ) {
      setUserRole('BOHead');
      localStorage.setItem('userRole', 'BOHead');
      router.push('/bohead');
    } else if (
      values.email === 'branchoffice@gmail.com' &&
      values.password === 'staff@123'
    ) {
      setUserRole('BOStaff');
      localStorage.setItem('userRole', 'BOStaff');
      router.push('/bostaff');
    } else {
      localStorage.setItem('userEmail', '');
      localStorage.setItem('userPassword', '');
      localStorage.setItem('userRole', '');
      console.log('Invalid credentials');
    }
    console.log(values);
  };

  const logout = () => {
    try {
      localStorage.removeItem('userEmail');
      localStorage.removeItem('userPassword');
      localStorage.removeItem('userRole');
    } catch {}
    setUserEmail('');
    setUserPassword('');
    setUserRole('');
  };

  const isAuthenticated = Boolean(userEmail);

  return (
    <UserContext.Provider
      value={{
        userEmail,
        setUserEmail,
        userPassword,
        setUserPassword,
        userRole,
        setUserRole,
        login,
        logout,
        isAuthenticated,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUserData() {
  const ctx = useContext(UserContext);
  if (!ctx) {
    throw new Error('useUserData must be used within a UserDataProvider');
  }
  return ctx;
}
