import NoteItem from './NoteItem';

const NoteList = ({ notes, onDelete, onArchive }) => {
    if (notes.length === 0) {
        return <p className="notes-list__empty-message">Tidak ada catatan</p>;
    }

    return (
        <div className="notes-list">
            {notes.map((note) => (
                <NoteItem
                    key={note.id}
                    id={note.id}
                    onDelete={onDelete}
                    onArchive={onArchive}
                    archived={note.archived}
                    {...note}
                />
            ))}
        </div>
    );
};

export default NoteList;
