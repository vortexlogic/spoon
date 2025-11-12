module.exports = {
    name: 'working-upgrade-test',
    version: '1.0.0',
    description: 'Test upgrade to verify the upgrade system works',
    
    async apply(loader) {
        const { colorize } = require('../../src/utils/ascii-art');
        
        console.log(colorize.info('🔄 Applying Working Test Upgrade...'));
        console.log(colorize.success('✅ Test upgrade applied successfully!'));
        
        // Update loader state
        loader.state.testUpgradeApplied = true;
        loader.state.upgradeTestTime = new Date().toISOString();
        
        return true;
    }
};
