declare module "lzwcompress";

interface LzwCompress {
  pack: (uncompressed: string) => number[];
  unpack: (compressed: number[]) => string;
  enableLogging: (enable: boolean) => void;
}

declare const lzwCompress: LzwCompress;

export default lzwCompress;
