const fs = require('fs');
const path = require('path');
const { colorize } = require('../utils/ascii-art');

class ModularLoader {
    constructor() {
        this.modules = new Map();
        this.commands = new Map();
        this.loadedUpgrades = new Set();
        this.state = {
            belief: 0.45,
            evolutionStage: "awakening",
            totalCommands: 23,
            realityManipulationLevel: "basic",
            trainingProgress: {},
            lastActivity: new Date().toISOString()
        };
    }

    // Load all modules dynamically
    async loadModules() {
        const modulesDir = path.join(__dirname, '..');
        
        // Load core systems
        await this.loadDirectory(path.join(modulesDir, 'core'));
        // Load commands
        await this.loadDirectory(path.join(modulesDir, 'commands'));
        // Load integrations
        await this.loadDirectory(path.join(modulesDir, 'integrations'));
        // Load characters
        await this.loadDirectory(path.join(modulesDir, 'characters'));
        
        console.log(colorize.success(`✅ Loaded ${this.modules.size} modules`));
        console.log(colorize.success(`✅ Loaded ${this.commands.size} commands`));
    }

    async loadDirectory(dirPath) {
        if (!fs.existsSync(dirPath)) return;

        const files = fs.readdirSync(dirPath);
        
        for (const file of files) {
            if (file.endsWith('.js') && file !== 'loader.js') {
                try {
                    const modulePath = path.join(dirPath, file);
                    const module = require(modulePath);
                    const moduleName = path.basename(file, '.js');
                    
                    this.modules.set(moduleName, module);
                    
                    // If it's a command, register it
                    if (module.prototype && module.prototype.execute) {
                        this.commands.set(moduleName, module);
                    }
                    
                } catch (error) {
                    console.log(colorize.error(`❌ Failed to load ${file}: ${error.message}`));
                }
            }
        }
    }

    getCommand(commandName) {
        return this.commands.get(commandName);
    }

    getModule(moduleName) {
        return this.modules.get(moduleName);
    }

    // Upgrade system
    async loadUpgrades() {
        const upgradesDir = path.join(__dirname, '..', '..', 'upgrades', 'available');
        
        if (!fs.existsSync(upgradesDir)) {
            console.log(colorize.info('ℹ️  No upgrades directory found'));
            return;
        }
        
        const upgrades = fs.readdirSync(upgradesDir).filter(f => f.endsWith('.js'));
        
        if (upgrades.length === 0) {
            console.log(colorize.info('ℹ️  No upgrades available'));
            return;
        }

        console.log(colorize.info(`🔄 Found ${upgrades.length} upgrade(s)...`));
        
        for (const upgradeFile of upgrades) {
            try {
                const upgradePath = path.join(upgradesDir, upgradeFile);
                const upgrade = require(upgradePath);
                
                if (await this.applyUpgrade(upgrade)) {
                    this.loadedUpgrades.add(upgrade.name);
                    console.log(colorize.success(`✅ Applied upgrade: ${upgrade.name}`));
                } else {
                    console.log(colorize.info(`ℹ️  Upgrade already applied: ${upgrade.name}`));
                }
            } catch (error) {
                console.log(colorize.error(`❌ Failed to apply upgrade ${upgradeFile}: ${error.message}`));
            }
        }
    }

    async applyUpgrade(upgrade) {
        // Check if upgrade is already applied
        const appliedDir = path.join(__dirname, '..', '..', 'upgrades', 'applied');
        if (!fs.existsSync(appliedDir)) {
            fs.mkdirSync(appliedDir, { recursive: true });
        }
        
        const appliedFile = path.join(appliedDir, `${upgrade.name}.json`);
        if (fs.existsSync(appliedFile)) {
            return false; // Already applied
        }

        // Apply the upgrade
        if (upgrade.apply && typeof upgrade.apply === 'function') {
            console.log(colorize.info(`🔄 Applying upgrade: ${upgrade.name}`));
            console.log(colorize.description(`   ${upgrade.description}`));
            
            await upgrade.apply(this);
            
            // Mark as applied
            fs.writeFileSync(appliedFile, JSON.stringify({
                name: upgrade.name,
                version: upgrade.version,
                description: upgrade.description,
                appliedAt: new Date().toISOString()
            }, null, 2));
            
            return true;
        }
        return false;
    }

    // State management
    updateBelief(increment = 0.05) {
        const oldStage = this.getEvolutionStage();
        this.state.belief = Math.min(1, this.state.belief + increment);
        this.state.totalCommands += 1;
        
        const newStage = this.getEvolutionStage();
        if (oldStage !== newStage) {
            this.state.evolutionStage = newStage;
            console.log(colorize.success(`🎉 EVOLUTION: ${oldStage.toUpperCase()} → ${newStage.toUpperCase()}`));
        }
        
        return this.state.belief;
    }

    getEvolutionStage() {
        if (this.state.belief < 0.3) return "beginning";
        if (this.state.belief < 0.7) return "awakening";
        return "the_one";
    }

    getStats() {
        return {
            belief: this.state.belief,
            evolutionStage: this.getEvolutionStage(),
            totalCommands: this.state.totalCommands,
            realityManipulationLevel: this.state.realityManipulationLevel,
            loadedUpgrades: Array.from(this.loadedUpgrades)
        };
    }
}

module.exports = { ModularLoader };
