const NoteSearch = ({ onSearch }) => {
    const handleSearchChange = (event) => {
        onSearch(event.target.value);
    };

    return (
        <div className="note-search">
            <input
                type="text"
                placeholder="Cari catatan ..."
                onChange={handleSearchChange}
            />
        </div>
    );
};

export default NoteSearch;
