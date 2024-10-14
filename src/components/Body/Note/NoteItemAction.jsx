import DeleteButton from '../Button/DeleteButton';
import ArchiveButton from '../Button/ArchiveButton';

const NoteItemAction = ({ id, onDelete, onArchive, archived }) => {
    return (
        <div className="note-item__action">
            <DeleteButton id={id} onDelete={onDelete} />
            <ArchiveButton id={id} onArchive={onArchive} archived={archived} />
        </div>
    );
};

export default NoteItemAction;
