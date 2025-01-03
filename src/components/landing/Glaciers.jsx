/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 public/models/environment/glaciers.glb 
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Glacier(props) {
  const { nodes, materials } = useGLTF('./models/environment/glaciers.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Landscape002.geometry} material={materials.Material} position={[-2.694, 0, 3.474]} />
    </group>
  )
}

useGLTF.preload('./models/environment/glaciers.glb')
