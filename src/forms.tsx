import {
  Button,
  CheckboxControl,
  ComboboxControl,
  Flex,
  FlexBlock,
  FormTokenField,
  Icon,
  RadioControl,
  SelectControl,
  TextControl,
  TextareaControl,
  ToggleControl,
} from "@wordpress/components";
import React, { useState } from "@wordpress/element";

export const Forms = () => {
  const [isChecked, setChecked] = useState(true);
  const [isToggled, setToggled] = useState(true);
  const [comboOption, setComboOption] = useState("");
  const [option, setOption] = useState("a");
  const [select, setSelect] = useState("curly");
  const [selected, setSelected] = useState([]);
  const [text, setText] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [textarea, setTextarea] = useState("");
  const [validatedText, setValidatedText] = useState("");

  const options = [
    {
      label: "Freddie Mercury",
      value: "freddie",
    },
    {
      label: "Brian May",
      value: "brian",
    },
    {
      label: "Roger Taylor",
      value: "roger",
    },
    {
      label: "John Deacon",
      value: "john",
    },
  ];
  const radioOptions = [
    { label: "Light Speed", value: "a" },
    { label: "Warp Speed", value: "b" },
    { label: "Ludicrous Speed", value: "c" },
  ];
  const suggestions = [
    "John Lennon",
    "Paul McCartney",
    "George Harrison",
    "Ringo Star",
  ];

  return (
    <section>
      <form name="form">
        <table className="form-table" role="presentation">
          <tbody>
            <tr>
              <th>Text fields</th>
              <td>
                <TextControl
                  label="Text field"
                  onChange={(value) => setText(value)}
                  value={text}
                />
                <TextControl
                  help="This is the help text."
                  label="Text field with help text"
                  onChange={(value) => setText(value)}
                  value={text}
                />
              </td>
            </tr>
            <tr
              className={`form-required ${
                !validatedText ? "form-invalid" : ""
              }`}>
              <th>Validated text fields</th>
              <td>
                <TextControl
                  help="This is a validated text field."
                  label="Validated text"
                  onChange={(value) => setValidatedText(value)}
                  value={validatedText}
                />
              </td>
            </tr>
            <tr>
              <th>Password fields</th>
              <td>
                <Flex justify="start" expanded={false}>
                  <FlexBlock>
                    <TextControl
                      label="Password field"
                      onChange={(value) => setPassword(value)}
                      type={showPassword ? "text" : "password"}
                      value={password}
                    />
                  </FlexBlock>
                  <Button
                    icon={
                      <Icon icon={showPassword ? "hidden" : "visibility"} />
                    }
                    iconSize={20}
                    onClick={() => setShowPassword((state) => !state)}
                    style={{ marginTop: "1rem" }}
                    variant="tertiary"></Button>
                </Flex>
              </td>
            </tr>
            <tr>
              <th>Textarea</th>
              <td>
                <TextareaControl
                  label="Textarea field"
                  onChange={(value) => setTextarea(value)}
                  value={textarea}
                />
              </td>
            </tr>
            <tr>
              <th>Select</th>
              <td>
                <SelectControl
                  label="Select one of the Three Stooges"
                  value={select}
                  options={[
                    { label: "Larry", value: "larry" },
                    { label: "Moe", value: "moe" },
                    { label: "Curly", value: "curly" },
                    { label: "Shemp", value: "shemp" },
                    { label: "Fake Shemp", value: "fake-shemp" },
                  ]}
                  onChange={(value) => setSelect(value)}
                />
              </td>
            </tr>
            <tr>
              <th>Form token</th>
              <td>
                <FormTokenField
                  label="Type one of the Beatles"
                  onChange={(tokens) => setSelected(tokens)}
                  suggestions={suggestions}
                  value={selected}
                />
              </td>
            </tr>
            <tr>
              <th>Combobox</th>
              <td>
                <ComboboxControl
                  label="Select a member of Queen's original lineup"
                  onChange={setComboOption}
                  options={options}
                  value={comboOption}
                />
              </td>
            </tr>
            <tr>
              <th>Checkboxes</th>
              <td>
                <CheckboxControl
                  label="Is this checked"
                  checked={isChecked}
                  onChange={setChecked}
                />
              </td>
            </tr>
            <tr>
              <th>Toggles</th>
              <td>
                <ToggleControl
                  label="Is toggled"
                  checked={isToggled}
                  onChange={() => {
                    setToggled((state) => !state);
                  }}
                />
              </td>
            </tr>
            <tr>
              <th>Radio</th>
              <td>
                <RadioControl
                  help={`Prepare ship for ${
                    radioOptions.find((value) => value.value === option)?.label
                  }!`}
                  label="Speed"
                  onChange={(value) => setOption(value)}
                  options={radioOptions}
                  selected={option}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <p className="submit">
          <Button variant="primary">Submit</Button>
        </p>
      </form>
    </section>
  );
};
