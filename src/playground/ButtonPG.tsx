import { Button } from '../components';
import { BASE_COLORS, SEMANTIC_COLORS } from '../utils/colors';

const ButtonPG = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl text-zinc-700 font-semibold my-2">Buttons</h1>

      {/* 🌈 Semantic Variants */}
      <div className="flex flex-col gap-2">
        <h2 className="text-lg mb-2 text-zinc-600 font-medium">
          Semantic Variants
        </h2>
        <div className="flex flex-wrap gap-2">
          {SEMANTIC_COLORS.map((variant) => (
            <Button key={variant} variant="solid" color={variant}>
              {variant}
            </Button>
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          {SEMANTIC_COLORS.map((variant) => (
            <Button key={variant} variant="outline" color={variant}>
              {variant}
            </Button>
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          {SEMANTIC_COLORS.map((variant) => (
            <Button key={variant} variant="ghost" color={variant}>
              {variant}
            </Button>
          ))}
        </div>
      </div>

      {/* 🎨 Color Variants */}
      <div className="flex flex-col gap-2">
        <h2 className="text-lg mb-2 text-zinc-600 font-medium">
          Color Variants
        </h2>
        <div className="flex flex-wrap gap-2">
          {BASE_COLORS.map((color) => (
            <Button key={color} variant="solid" color={color}>
              {color}
            </Button>
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          {BASE_COLORS.map((color) => (
            <Button key={color} variant="outline" color={color}>
              {color}
            </Button>
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          {BASE_COLORS.map((color) => (
            <Button key={color} variant="ghost" color={color}>
              {color}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ButtonPG;
