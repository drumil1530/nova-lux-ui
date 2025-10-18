import { Input } from '../components';
import { SEMANTIC_COLORS } from '../utils/colors';

const InputPG = () => {

  return (
    <div className="flex flex-col gap-4 p-4">
      <h1 className="text-2xl font-bold">Input Playground</h1>

      <h2 className="font-semibold">Sizes</h2>
      <div className="flex flex-col gap-2">
        <Input size="sm" placeholder="Small" />
        <Input size="md" placeholder="Medium" />
        <Input size="lg" placeholder="Large" />
      </div>

      <h2 className="font-semibold">Variants</h2>
      <div className="flex flex-col gap-2">
        <Input variant="outline" placeholder="Outline" />
        <Input variant="filled" placeholder="Filled" />
        <Input variant="ghost" placeholder="Ghost" />
      </div>

      <h2 className="font-semibold">Semantic Colors</h2>
      <div className="flex flex-col gap-2">
        {SEMANTIC_COLORS.map((c) => (
          <Input key={c} color={c} placeholder={c} />
        ))}
      </div>

      <h2 className="font-semibold">Disabled</h2>
      <Input disabled placeholder="Disabled" />
    </div>
  );
};

export default InputPG;
