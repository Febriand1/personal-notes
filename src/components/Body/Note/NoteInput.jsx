import NoteForm from './NoteForm';

const NoteInput = ({ addNote }) => {
    return (
        <div className="note-input">
            <h2>Buat catatan</h2>
            <NoteForm addNote={addNote} />
        </div>
    );
};

export default NoteInput;
