import { Textarea } from '../components';

const TextareaPG = () => {
  return (
    <div className="space-y-6 p-4 max-w-lg mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Textarea Examples</h1>

      <Textarea placeholder="Default Textarea" />

      <Textarea color="primary" placeholder="Primary color" />

      <Textarea color="success" radius="lg" placeholder="Rounded and green" />

      <Textarea
        variant="filled"
        color="sky"
        radius="xl"
        rows={5}
        autoGrow
        placeholder="Auto grow"
      />
      <Textarea resize="none" placeholder="Resize disabled" />

      <Textarea disabled placeholder="Disabled textarea" />
    </div>
  );
};

export default TextareaPG;
