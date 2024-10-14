import React from 'react';
import NoteInput from './Note/NoteInput';
import NoteList from './Note/NoteList';
import { getInitialData, showFormattedDate } from '../../utils/index';

class Body extends React.Component {
    state = {
        notes: getInitialData(),
    };

    onDeleteHandler = (id) => {
        const notes = this.state.notes.filter((note) => note.id !== id);
        this.setState({ notes });
    };

    onArchiveHandler = (id) => {
        const notes = this.state.notes.map((note) => {
            if (note.id === id) {
                return {
                    ...note,
                    archived: true,
                };
            }
            return note;
        });

        this.setState({ notes });
    };

    onUnarchiveHandler = (id) => {
        const notes = this.state.notes.map((note) => {
            if (note.id === id) {
                return {
                    ...note,
                    archived: false,
                };
            }
            return note;
        });

        this.setState({ notes });
    };

    onAddHandler = ({ title, body }) => {
        this.setState((prevState) => {
            return {
                notes: [
                    ...prevState.notes,
                    {
                        id: +Date.now(),
                        title,
                        createdAt: new Date().toISOString(),
                        body,
                        archived: false,
                    },
                ],
            };
        });
    };

    render() {
        const { searchTerm } = this.props;

        const activeNotes = this.state.notes.filter(
            (note) =>
                !note.archived &&
                note.title.toLowerCase().includes(searchTerm.toLowerCase())
        );

        const archivedNotes = this.state.notes.filter(
            (note) =>
                note.archived &&
                note.title.toLowerCase().includes(searchTerm.toLowerCase())
        );

        return (
            <div className="note-app__body">
                <NoteInput addNote={this.onAddHandler} />

                <h2>Catatan Aktif</h2>
                <NoteList
                    notes={activeNotes.map((note) => ({
                        ...note,
                        createdAt: showFormattedDate(note.createdAt),
                    }))}
                    onDelete={this.onDeleteHandler}
                    onArchive={this.onArchiveHandler}
                />

                <h2>Arsip</h2>
                <NoteList
                    notes={archivedNotes.map((note) => ({
                        ...note,
                        createdAt: showFormattedDate(note.createdAt),
                    }))}
                    onDelete={this.onDeleteHandler}
                    onArchive={this.onUnarchiveHandler}
                />
            </div>
        );
    }
}

export default Body;
