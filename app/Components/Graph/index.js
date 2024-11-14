"use client"

import { useEffect, useRef } from 'react';
import styles from './Graph.module.css';

const Graph = () => {
  // Refs para os nós e o contêiner SVG das arestas
  const node1Ref = useRef(null);
  const node2Ref = useRef(null);
  const node3Ref = useRef(null);
  const edgesRef = useRef(null);

  // Função para criar uma aresta entre dois nós
  const createEdge = (node1, node2) => {
    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    edgesRef.current.appendChild(line);

    const updateEdgePosition = () => {
      line.setAttribute("x1", node1.offsetLeft + node1.offsetWidth / 2);
      line.setAttribute("y1", node1.offsetTop + node1.offsetHeight / 2);
      line.setAttribute("x2", node2.offsetLeft + node2.offsetWidth / 2);
      line.setAttribute("y2", node2.offsetTop + node2.offsetHeight / 2);
    };

    updateEdgePosition(); // Define posição inicial
    return updateEdgePosition;
  };

  // Função para habilitar o arraste dos nós
  const enableDrag = (nodeRef, updateEdges) => {
    const node = nodeRef.current;
    const gapX = 200;
    const gapY = 0;
    node.onmousedown = (event) => {
      event.preventDefault();

      // Centraliza o nó no mouse ao iniciar o arraste
      let shiftX = node.offsetWidth / 2;
      let shiftY = node.offsetHeight / 2;

      const moveAt = (pageX, pageY) => {
        node.style.left = pageX - shiftX - gapX + 'px';
        node.style.top = pageY - shiftY  + 'px';
        updateEdges(); // Atualiza as arestas durante o movimento
      };

      const onMouseMove = (event) => {
        moveAt(event.pageX, event.pageY);
      };

      document.addEventListener('mousemove', onMouseMove);

      document.onmouseup = () => {
        document.removeEventListener('mousemove', onMouseMove);
        document.onmouseup = null;
      };
    };

    node.ondragstart = () => false;
  };

  useEffect(() => {
    // Obtenção dos nós
    const node1 = node1Ref.current;
    const node2 = node2Ref.current;
    const node3 = node3Ref.current;

    // Criação das arestas e atualização das posições
    const updateEdge1 = createEdge(node1, node2);
    const updateEdge2 = createEdge(node2, node3);
    const updateEdge3 = createEdge(node3, node1);

    // Habilitar o arraste dos nós com atualização das arestas
    enableDrag(node1Ref, () => { updateEdge1(); updateEdge3(); });
    enableDrag(node2Ref, () => { updateEdge1(); updateEdge2(); });
    enableDrag(node3Ref, () => { updateEdge2(); updateEdge3(); });
  }, []);

  return (
    <div className={styles.graphContainer}>
      <svg ref={edgesRef} className={styles.edges}></svg>
      <div ref={node1Ref} className={styles.node} style={{ top: '50px', left: '100px' }}>A</div>
      <div ref={node2Ref} className={styles.node} style={{ top: '200px', left: '300px' }}>B</div>
      <div ref={node3Ref} className={styles.node} style={{ top: '150px', left: '500px' }}>C</div>
    </div>
  );
};

export default Graph;
