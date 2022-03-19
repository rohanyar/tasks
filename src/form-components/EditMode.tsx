import React, { useState } from "react";
import { Form } from "react-bootstrap";

type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;

export function EditMode(): JSX.Element {
    const [edit, setEdit] = useState<boolean>(false);
    const [student, setStudent] = useState<boolean>(true);
    const [name, setName] = useState<string>("Your Name");
    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check
                type="switch"
                id="is-editing-check"
                label="Edit?"
                checked={edit}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setEdit(e.target.checked);
                }}
            />
            {!edit && (
                <p>
                    {name} is {student ? "" : "not"} a student
                </p>
            )}
            {edit && (
                <Form.Group controlId="editMode">
                    <Form.Label>Change Your Name</Form.Label>
                    <Form.Control
                        type="text"
                        value={name}
                        onChange={(e: ChangeEvent) => {
                            setName(e.target.value);
                        }}
                    ></Form.Control>
                    <Form.Check
                        type="checkbox"
                        id="is-student"
                        label="Student?"
                        checked={student}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            setStudent(e.target.checked);
                        }}
                    ></Form.Check>
                </Form.Group>
            )}
        </div>
    );
}
