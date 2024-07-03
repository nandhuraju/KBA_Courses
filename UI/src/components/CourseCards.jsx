import React, { useEffect, useState } from "react";
import CourseCard from "./CourseCard";
// import courses from '../courses.json'

const CourseCards = ({ isHome = false }) => {
  // console.log(courses);

  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await fetch("/api/courses");
        const data = await res.json();

        setCourses(data);
      } catch (error) {
        console.log("error", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCourses();
  }, []);
  const courseList = isHome ? courses.slice(0, 3) : courses;

  return (
    <>
      <h1 className="font-bold text-lg text-purple-900 text-center">
        {" "}
        {isHome ? "Browse all Courses" : "All Courses"}{" "}
      </h1>

      {loading ? (
        <h1>loading</h1>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mx-5 my-10">
          {courseList.map((cour) => (
            <CourseCard course={cour} />
          ))}
        </div>
      )}
    </>
  );
};

export default CourseCards;
