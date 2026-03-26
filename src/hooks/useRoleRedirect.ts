import { useEffect, useState } from "react";

export const useRoleRedirect = (userId: string | undefined) => {
  const [roles, setRoles] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!userId) {
      setLoading(false);
      return;
    }
    // Get user from localStorage
    const users = JSON.parse(localStorage.getItem('urumuri_users') || '[]');
    const user = users.find((u: any) => u.id === userId);
    if (user) {
      setRoles([user.role]);
    }
    setLoading(false);
  }, [userId]);

  const getDashboardPath = () => {
    if (roles.includes("admin")) return "/admin";
    if (roles.includes("employer")) return "/employer";
    if (roles.includes("mentor")) return "/mentor-dashboard";
    if (roles.includes("counselor")) return "/dashboard";
    return "/dashboard";
  };

  return { roles, loading, getDashboardPath };
};
