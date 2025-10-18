import { Text } from '../components';

const TextPG = () => {
  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold mb-4">🧱 Text Component Showcase</h1>

      <section>
        <h2 className="text-xl font-semibold mb-2">Variants</h2>
        <Text variant="normal" color="primary">
          Normal Primary
        </Text>
        <Text variant="subtle" color="primary">
          Subtle Primary
        </Text>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Sizes</h2>
        <Text size="sm">Small Text</Text>
        <Text size="md">Medium Text</Text>
        <Text size="lg">Large Text</Text>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Styles</h2>
        <Text bold>Bold Text</Text>
        <Text italic>Italic Text</Text>
        <Text underline>Underlined Text</Text>
        <Text bold italic color="purple">
          Bold + Italic + Purple
        </Text>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">As Prop</h2>
        <Text as="span" color="emerald">
          Rendered as span
        </Text>
        <Text as="div" color="rose">
          Rendered as div
        </Text>
      </section>
    </div>
  );
};

export default TextPG;
