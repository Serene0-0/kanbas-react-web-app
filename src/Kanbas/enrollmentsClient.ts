import axios from "axios";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const ENROLLMENTS_API = `${REMOTE_SERVER}/api/enrollments`;

export const fetchAllEnrollments = async () => {
    const { data } = await axios.get(ENROLLMENTS_API);
    return data;
};

export const fetchEnrollmentsForUser = async (userId: string) => {
    const { data } = await axios.get(`${ENROLLMENTS_API}/user/${userId}`);
    return data;
}

export const enrollUserInCourse = async (userId: string, courseId: string) => {
    const { data } = await axios.post(`${ENROLLMENTS_API}/user/${userId}/course/${courseId}`);
    return data;
}

export const deleteEnrollment = async (userId: string, courseId: string) => {
    await axios.delete(`${ENROLLMENTS_API}/user/${userId}/course/${courseId}`);
}