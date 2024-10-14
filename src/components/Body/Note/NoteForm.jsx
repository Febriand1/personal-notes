import React from 'react';

class NoteForm extends React.Component {
    state = {
        title: '',
        body: '',
    };

    onTitleChangeEventHandler = (event) => {
        this.setState({
            title: event.target.value.slice(0, 50),
        });
    };

    onBodyChangeEventHandler = (event) => {
        this.setState({
            body: event.target.value,
        });
    };

    onSubmitEventHandler = (event) => {
        event.preventDefault();
        this.props.addNote(this.state);
        this.setState({ title: '', body: '' });
    };

    render() {
        return (
            <form onSubmit={this.onSubmitEventHandler}>
                <p className="note-input__title__char-limit">
                    Sisa karakter: {50 - this.state.title.length}
                </p>
                <input
                    type="text"
                    className="note-input__title"
                    placeholder="Ini adalah judul ..."
                    required
                    value={this.state.title}
                    onChange={this.onTitleChangeEventHandler}
                />
                <textarea
                    className="note-input__body"
                    placeholder="Tulisakan catatanmu disini ..."
                    value={this.state.body}
                    onChange={this.onBodyChangeEventHandler}
                ></textarea>
                <button type="submit">Buat</button>
            </form>
        );
    }
}

export default NoteForm;
