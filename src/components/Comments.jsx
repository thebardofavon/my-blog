import React, { useEffect, useState } from 'react';
import { collection, query, where, onSnapshot, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';

const Comments = ({ postId }) => {
    const [comments, setComments] = useState([]);
    const [commentText, setCommentText] = useState("");

    useEffect(() => {
        const q = query(collection(db, "comments"), where("postId", "==", postId));
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const commentsData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setComments(commentsData);
        });
        return unsubscribe;
    }, [postId]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!commentText.trim()) return;
        await addDoc(collection(db, "comments"), {
            postId,
            text: commentText,
            createdAt: serverTimestamp(),
        });
        setCommentText("");
    };

    return (
        <div className="comments mt-8">
            <h2 className="text-2xl font-bold mb-4">Comments</h2>
            <form onSubmit={handleSubmit} className="mb-4">
                <textarea
                    className="w-full p-2 border rounded"
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                    placeholder="Write your comment here..."
                    rows="3"
                    required
                />
                <button type="submit" className="mt-2 px-4 py-2 bg-brown-500 text-white rounded hover:bg-brown-700 transition">
                    Post Comment
                </button>
            </form>
            <div>
                {comments.map(comment => (
                    <div key={comment.id} className="mb-4 p-2 border-b">
                        <p className="text-gray-800">{comment.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Comments;