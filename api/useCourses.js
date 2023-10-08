import { useState, useEffect } from "react";
import { apiBaseUrl } from "@/lib/constants";

const useCourses = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch(`${apiBaseUrl}/api/courses`, {
          headers: {
            "Content-Type": "application/json",
            // Include any other headers you need
          },
        });
        if (!response.ok) {
          throw new Error("Request failed");
        }
        const jsonData = await response.json();
        setData(jsonData);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    };

    fetchCourses();
  }, []);

  return { data, isLoading, error };
};

export default useCourses;
