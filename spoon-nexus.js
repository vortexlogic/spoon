#!/usr/bin/env node

const { SpoonNexus } = require('./src/nexus-core/reality-generator.js');
const { MouseReality } = require('./src/operators/mouse-reality.js');
const { TankControl } = require('./src/operators/tank-control.js');
const { SeraphWisdom } = require('./src/operators/seraph-wisdom.js');

class SpoonOmegaNexus {
    constructor() {
        this.nexus = new SpoonNexus();
        this.mouse = new MouseReality();
        this.tank = new TankControl();
        this.seraph = new SeraphWisdom();
    }

    async initiateRealityCreation(description) {
        console.log('🌌 SPOON NEXUS ACTIVATED - COSMIC CREATION INITIATED');
        
        // Mouse creates the reality structure
        const realityBlueprint = await this.mouse.generateReality(description);
        
        // Tank operates and builds
        const operationalReality = await this.tank.buildReality(realityBlueprint);
        
        // Seraph protects and validates
        const securedReality = await this.seraph.protectReality(operationalReality);
        
        return securedReality;
    }
}

module.exports = SpoonOmegaNexus;

// CLI entry point
if (require.main === module) {
    const nexus = new SpoonOmegaNexus();
    nexus.initiateRealityCreation(process.argv[2] || 'new cosmic reality');
}