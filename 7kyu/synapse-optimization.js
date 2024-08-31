// Context: In this problem, you are a neuroscientist working on optimizing neural pathways in the brain. You have a dataset representing synapses between neurons, and your goal is to filter out the synapses that are not firing efficiently.

// Problem Statement: You are given an array of synapses, where each synapse is an object containing the following properties:

// id: A unique identifier for the synapse.
// neuronA: The starting neuron of the synapse.
// neuronB: The ending neuron of the synapse.
// efficiency: A numerical value representing the efficiency of the synapse (on a scale from 0 to 100).
// Your task is to write a JavaScript function called filterInefficientSynapses that takes in an array of synapse objects and returns a new array containing only the synapses with an efficiency of 70 or higher.



function filterInefficientSynapses(synapses) {
    return synapses.filter(item => item.efficiency >= 70)
}


const synapses = [
    { id: 'S001', neuronA: 'N1', neuronB: 'N2', efficiency: 65 },
    { id: 'S002', neuronA: 'N2', neuronB: 'N3', efficiency: 75 },
    { id: 'S003', neuronA: 'N1', neuronB: 'N4', efficiency: 80 },
    { id: 'S004', neuronA: 'N3', neuronB: 'N5', efficiency: 55 },
    { id: 'S005', neuronA: 'N2', neuronB: 'N6', efficiency: 90 },
];

console.log(filterInefficientSynapses(synapses));
