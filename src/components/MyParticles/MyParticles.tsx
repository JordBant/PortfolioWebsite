import React, { FC, useCallback, useMemo } from "react";
import { Engine, type ISourceOptions } from "@tsparticles/engine";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { IParticlesOptions } from "tsparticles-engine";
import { ParticlesConfig } from "../../store";

export const MyParticles: FC = () => {
  const particlesOptions = ParticlesConfig;
  const customInit = useCallback(async (engine: Engine) => {
    /**
     * Adds the bundle to tsParticles
     */
    await loadFull(engine);
  }, []);
  //   return <div>MyParticles</div>,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return <Particles id="my-particles" init={customInit} options={particlesOptions} />;
};

