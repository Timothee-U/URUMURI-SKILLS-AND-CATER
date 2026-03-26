import { useEffect, useState } from "react";

export const useRoleRedirect = (userId: string | undefined) => {
  const [roles, setRoles] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!userId) {
      setLoading(false);
      return;
    }
    supabase
      .from("user_roles")
      .select("role")
      .eq("user_id", userId)
      .then(({ data }) => {
        setRoles(data?.map((r) => r.role) || []);
        setLoading(false);
      });
  }, [userId]);

  const getDashboardPath = () => {
    if (roles.includes("admin")) return "/admin";
    if (roles.includes("employer")) return "/employer";
    if (roles.includes("mentor")) return "/mentor-dashboard";
    if (roles.includes("counselor")) return "/counselor-dashboard";
    return "/dashboard";
  };

  return { roles, loading, getDashboardPath };
};
