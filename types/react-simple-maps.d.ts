declare module "react-simple-maps" {
  import { ComponentType, CSSProperties } from "react";

  interface ProjectionConfig {
    scale?: number;
    center?: [number, number];
    rotate?: [number, number, number];
  }

  interface ComposableMapProps {
    projection?: string;
    projectionConfig?: ProjectionConfig;
    width?: number;
    height?: number;
    style?: CSSProperties;
    children?: React.ReactNode;
  }

  interface GeographiesChildrenArgs {
    geographies: Array<{
      rsmKey: string;
      properties: Record<string, string>;
      [key: string]: unknown;
    }>;
  }

  interface GeographiesProps {
    geography: string | object;
    children: (args: GeographiesChildrenArgs) => React.ReactNode;
  }

  interface GeographyStyleState {
    outline?: string;
    fill?: string;
    stroke?: string;
    strokeWidth?: number;
  }

  interface GeographyProps {
    geography: object;
    key?: string;
    fill?: string;
    stroke?: string;
    strokeWidth?: number;
    style?: {
      default?: GeographyStyleState;
      hover?: GeographyStyleState;
      pressed?: GeographyStyleState;
    };
    onMouseEnter?: (event: React.MouseEvent) => void;
    onMouseLeave?: (event: React.MouseEvent) => void;
    onClick?: (event: React.MouseEvent) => void;
  }

  export const ComposableMap: ComponentType<ComposableMapProps>;
  export const Geographies: ComponentType<GeographiesProps>;
  export const Geography: ComponentType<GeographyProps>;
}
