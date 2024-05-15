import React, { useState, useEffect } from 'react';
import './tracker.css';

// Component for individual practice sessions
const PracticeSession = ({ session, onEdit, onDelete }) => {
  const { id, date, duration, notes } = session;

  return (
    <div className="practice-session" style={{ border: '1px solid black', padding: '10px', margin: '10px 0' }}>
      <p><strong>Date:</strong> {date}</p>
      <p><strong>Duration:</strong> {duration} minutes</p>
      <p><strong>Notes:</strong> {notes}</p>
      <button onClick={() => onEdit(id)}>Edit</button>
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
};

const PracticeTracker = () => {
  const [practiceSessions, setPracticeSessions] = useState(() => {
    const storedSessions = localStorage.getItem('practiceSessions');
    return storedSessions ? JSON.parse(storedSessions) : [];
  });

  const [form, setForm] = useState({
    date: '',
    duration: '',
    notes: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newSession = {
      id: Date.now(),
      date: form.date,
      duration: form.duration,
      notes: form.notes,
    };

    setPracticeSessions([newSession, ...practiceSessions]);
    setForm({ date: '', duration: '', notes: '' });
  };

  const handleEdit = (id, updatedSession) => {
    const updatedSessions = practiceSessions.map((session) =>
      session.id === id ? { ...session, ...updatedSession } : session
    );
    setPracticeSessions(updatedSessions);
  };

  const handleDelete = (id) => {
    setPracticeSessions(practiceSessions.filter((session) => session.id !== id));
  };

  useEffect(() => {
    localStorage.setItem('practiceSessions', JSON.stringify(practiceSessions));
  }, [practiceSessions]);

  return (
    <div className='practice-tracker'>
      <h1>Practice Tracker</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Date:</label>
          <input className='form-control' name="date" type="date" value={form.date} onChange={handleChange} />
        </div>
        <div>
          <label>Duration (minutes):</label>
          <input className='form-control' name="duration" type="number" value={form.duration} onChange={handleChange} />
        </div>
        <div>
          <label>Notes:</label>
          <input className='form-control' name="notes" type="text" value={form.notes} onChange={handleChange} />
        </div>
        <button type="submit" className='btn btn-primary'>Add Session</button>
      </form>

      {practiceSessions.map((session) => (
        <PracticeSession key={session.id} session={session} onEdit={handleEdit} onDelete={handleDelete} />
      ))}
    </div>
  );
};

export default PracticeTracker;
