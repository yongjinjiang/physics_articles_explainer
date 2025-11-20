<script context="module">
  export const metadata = {
    title: "Understanding Quantum Entanglement",
    description: "An introduction to one of the most fascinating phenomena in quantum physics",
    date: "2025-01-15",
    slug: "quantum-entanglement",
    author: "Physics Explainer Team",
    sourceUrl: "https://example.com/quantum-entanglement"
  };

  export const explanations = [
    {
      id: "quantum-state",
      title: "What is a Quantum State?",
      content: `
        <p>A quantum state is a mathematical object that fully describes the properties of a quantum system. Unlike classical physics where an object has definite properties (like position and momentum), a quantum system exists in a <strong>superposition</strong> of multiple states until measured.</p>
        <p>The quantum state is typically represented by a wave function (ψ), which contains all the information about the system's possible configurations and their probabilities.</p>
      `
    },
    {
      id: "epr-paradox",
      title: "The EPR Paradox Explained",
      content: `
        <p>The EPR (Einstein-Podolsky-Rosen) paradox is a thought experiment that highlighted what Einstein saw as problems with quantum mechanics. The key issue was that entangled particles seemed to influence each other instantaneously, regardless of the distance between them.</p>
        <p>Einstein believed this violated the principle of <strong>locality</strong> - the idea that objects are only directly influenced by their immediate surroundings. He argued that there must be "hidden variables" that quantum mechanics wasn't accounting for.</p>
        <p>However, later experiments have shown that quantum mechanics is correct, and nature really does exhibit this "spooky action at a distance."</p>
      `
    },
    {
      id: "bells-theorem",
      title: "Bell's Theorem and Its Significance",
      content: `
        <p>Bell's theorem, proposed by physicist John Stewart Bell in 1964, is one of the most profound results in quantum mechanics. It provides an experimental way to distinguish between quantum mechanics and local hidden variable theories.</p>
        <p>The theorem derives <strong>Bell inequalities</strong> - mathematical inequalities that must be satisfied if local realism is true. Experiments have repeatedly violated these inequalities, confirming that:</p>
        <ul>
          <li>Quantum mechanics is correct</li>
          <li>Local hidden variable theories cannot explain quantum phenomena</li>
          <li>Nature exhibits genuine non-local correlations</li>
        </ul>
      `
    },
    {
      id: "quantum-computing",
      title: "Quantum Entanglement in Quantum Computing",
      content: `
        <p>Quantum computers leverage entanglement to perform certain calculations exponentially faster than classical computers. In a quantum computer:</p>
        <ul>
          <li><strong>Qubits</strong> (quantum bits) can exist in superposition states</li>
          <li>Entangled qubits create correlations that allow parallel processing of information</li>
          <li>The quantum state of multiple qubits can represent exponentially more information than classical bits</li>
        </ul>
        <p>This allows quantum computers to solve specific problems - like factoring large numbers or simulating quantum systems - much more efficiently than classical computers.</p>
      `
    },
    {
      id: "quantum-cryptography",
      title: "Quantum Cryptography and Security",
      content: `
        <p>Quantum cryptography uses the principles of quantum mechanics, including entanglement, to create theoretically unbreakable encryption systems. The most well-known protocol is <strong>Quantum Key Distribution (QKD)</strong>.</p>
        <p>Key advantages:</p>
        <ul>
          <li><strong>Eavesdropping detection</strong>: Any attempt to intercept the quantum key disturbs the quantum state, alerting the communicating parties</li>
          <li><strong>Information-theoretic security</strong>: Security is guaranteed by the laws of physics, not computational complexity</li>
          <li><strong>Future-proof</strong>: Cannot be broken even by quantum computers</li>
        </ul>
        <p>Several QKD networks are already operational, including in China and Europe.</p>
      `
    }
  ];
</script>

<script>
  import ExplanationTrigger from '$lib/components/ExplanationTrigger.svelte';

  export let scrollToExplanation;
</script>

## Introduction to Quantum Entanglement

Quantum entanglement is a physical phenomenon that occurs when a group of particles are generated, interact, or share spatial proximity in a way such that the <ExplanationTrigger id="quantum-state" {scrollToExplanation}>quantum state</ExplanationTrigger> of each particle of the group cannot be described independently of the state of the others.

## The EPR Paradox

In 1935, Albert Einstein, Boris Podolsky, and Nathan Rosen published a paper describing what became known as the <ExplanationTrigger id="epr-paradox" {scrollToExplanation}>EPR paradox</ExplanationTrigger>. They argued that quantum mechanics was incomplete because it allowed for what Einstein called "spooky action at a distance."

## Bell's Theorem

Later, physicist John Bell developed <ExplanationTrigger id="bells-theorem" {scrollToExplanation}>Bell's theorem</ExplanationTrigger>, which provided a way to test whether quantum mechanics or local hidden variable theories correctly describe reality.

## Modern Applications

Today, quantum entanglement is not just a theoretical curiosity. It has practical applications in:

- <ExplanationTrigger id="quantum-computing" {scrollToExplanation}>Quantum computing</ExplanationTrigger>
- <ExplanationTrigger id="quantum-cryptography" {scrollToExplanation}>Quantum cryptography</ExplanationTrigger>
- Quantum teleportation

## Conclusion

Understanding quantum entanglement requires us to fundamentally rethink our classical intuitions about how the universe works at the smallest scales.
