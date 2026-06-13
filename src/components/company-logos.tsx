import React from "react";
import OpenAIComponent from "@lobehub/icons/es/OpenAI/components/Mono.js";
import AnthropicComponent from "@lobehub/icons/es/Anthropic/components/Mono.js";
import DeepMindComponent from "@lobehub/icons/es/DeepMind/components/Color.js";
import XAIComponent from "@lobehub/icons/es/XAI/components/Mono.js";
import MetaComponent from "@lobehub/icons/es/Meta/components/Color.js";
import MistralComponent from "@lobehub/icons/es/Mistral/components/Color.js";
import CohereComponent from "@lobehub/icons/es/Cohere/components/Mono.js";
import DeepSeekComponent from "@lobehub/icons/es/DeepSeek/components/Mono.js";
import MoonshotComponent from "@lobehub/icons/es/Moonshot/components/Mono.js";
import QwenComponent from "@lobehub/icons/es/Qwen/components/Color.js";
import ByteDanceComponent from "@lobehub/icons/es/ByteDance/components/Mono.js";
import BaiduComponent from "@lobehub/icons/es/Baidu/components/Mono.js";
import ZhipuComponent from "@lobehub/icons/es/Zhipu/components/Color.js";
import TencentComponent from "@lobehub/icons/es/Tencent/components/Color.js";
import MinimaxComponent from "@lobehub/icons/es/Minimax/components/Color.js";
import ZeroOneComponent from "@lobehub/icons/es/ZeroOne/components/Color.js";

interface LogoProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  size?: number;
}

// Brand logo for Silicon Epoch (custom design representing silicon wafer/node)
export const SiliconEpochLogo: React.FC<LogoProps> = ({ className = "", size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    width={size}
    height={size}
    className={`text-ember ${className}`}
    {...props}
  >
    <rect x="5" y="5" width="14" height="14" rx="2" />
    <path d="M9 9h6v6H9z" fill="currentColor" fillOpacity="0.1" />
    <path d="M9 1v4M15 1v4M9 19v4M15 19v4M1 9h4M1 15h4M19 9h4M19 15h4" />
    <circle cx="12" cy="12" r="1.5" fill="currentColor" />
  </svg>
);

// Wrappers rendering the individual Lobe components directly without touching @lobehub/ui
export const OpenAILogo: React.FC<LogoProps> = ({ size = 24, className }) => (
  <OpenAIComponent size={size} className={className} />
);

export const AnthropicLogo: React.FC<LogoProps> = ({ size = 24, className }) => (
  <AnthropicComponent size={size} className={className} />
);

export const DeepMindLogo: React.FC<LogoProps> = ({ size = 24, className }) => (
  <DeepMindComponent size={size} className={className} />
);

export const XAILogo: React.FC<LogoProps> = ({ size = 24, className }) => (
  <XAIComponent size={size} className={className} />
);

export const MetaLogo: React.FC<LogoProps> = ({ size = 24, className }) => (
  <MetaComponent size={size} className={className} />
);

export const MistralLogo: React.FC<LogoProps> = ({ size = 24, className }) => (
  <MistralComponent size={size} className={className} />
);

export const CohereLogo: React.FC<LogoProps> = ({ size = 24, className }) => (
  <CohereComponent size={size} className={className} />
);

export const DeepSeekLogo: React.FC<LogoProps> = ({ size = 24, className }) => (
  <DeepSeekComponent size={size} className={className} />
);

export const MoonshotLogo: React.FC<LogoProps> = ({ size = 24, className }) => (
  <MoonshotComponent size={size} className={className} />
);

export const QwenLogo: React.FC<LogoProps> = ({ size = 24, className }) => (
  <QwenComponent size={size} className={className} />
);

export const ByteDanceLogo: React.FC<LogoProps> = ({ size = 24, className }) => (
  <ByteDanceComponent size={size} className={className} />
);

export const BaiduLogo: React.FC<LogoProps> = ({ size = 24, className }) => (
  <BaiduComponent size={size} className={className} />
);

export const ZhipuLogo: React.FC<LogoProps> = ({ size = 24, className }) => (
  <ZhipuComponent size={size} className={className} />
);

export const TencentLogo: React.FC<LogoProps> = ({ size = 24, className }) => (
  <TencentComponent size={size} className={className} />
);

export const MinimaxLogo: React.FC<LogoProps> = ({ size = 24, className }) => (
  <MinimaxComponent size={size} className={className} />
);

export const BinaryLogo: React.FC<LogoProps> = ({ size = 24, className }) => (
  <ZeroOneComponent size={size} className={className} />
);

// eslint-disable-next-line react-refresh/only-export-components
export const getLogoComponent = (name: string, size = 24, className = "") => {
  const normalized = name.toLowerCase().replace(/[\s.]+/g, "");
  switch (normalized) {
    case "openai":
      return <OpenAILogo size={size} className={className} />;
    case "anthropic":
      return <AnthropicLogo size={size} className={className} />;
    case "googledeepmind":
    case "deepmind":
      return <DeepMindLogo size={size} className={className} />;
    case "xai":
      return <XAILogo size={size} className={className} />;
    case "metaai":
    case "metaai•msl":
    case "meta":
      return <MetaLogo size={size} className={className} />;
    case "mistralai":
    case "mistral":
      return <MistralLogo size={size} className={className} />;
    case "cohere":
      return <CohereLogo size={size} className={className} />;
    case "deepseek":
      return <DeepSeekLogo size={size} className={className} />;
    case "moonshotai(kimi)":
    case "moonshotai":
    case "kimi":
      return <MoonshotLogo size={size} className={className} />;
    case "alibabaqwen":
    case "qwen":
      return <QwenLogo size={size} className={className} />;
    case "bytedancedoubao•seed":
    case "bytedance":
    case "doubao":
      return <ByteDanceLogo size={size} className={className} />;
    case "baiduernie":
    case "baidu":
    case "ernie":
      return <BaiduLogo size={size} className={className} />;
    case "zhipuai•glm(z.ai)":
    case "zhipuai":
    case "zhipu":
    case "glm":
      return <ZhipuLogo size={size} className={className} />;
    case "tencenthunyuan":
    case "tencent":
    case "hunyuan":
      return <TencentLogo size={size} className={className} />;
    case "minimax":
      return <MinimaxLogo size={size} className={className} />;
    case "01ai":
    case "01.ai":
      return <BinaryLogo size={size} className={className} />;
    case "amilabs(yannlecun)":
    case "amilabs":
      return <MetaLogo size={size} className={className} />;
    default:
      return <SiliconEpochLogo size={size} className={className} />;
  }
};
