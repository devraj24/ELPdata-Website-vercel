# Forward elpdata.com to www.elpdata.com in GoDaddy

## Quick Setup (5 minutes)

### Step 1: Access GoDaddy Forwarding
1. Login to GoDaddy.com
2. Go to "My Products" → "All Products and Services"
3. Find your domain "elpdata.com" 
4. Click "DNS" or "Manage"

### Step 2: Set Up Domain Forwarding
1. Look for "Forwarding" section (usually at bottom of DNS page)
2. Click "Add" or "Set up forwarding"
3. Configure:
   - **Domain**: elpdata.com (should be pre-filled)
   - **Forward to**: https://www.elpdata.com
   - **Redirect type**: Permanent (301)
   - **Settings**: Forward only (not masking)
   - **Update my nameservers**: Keep existing

### Step 3: Alternative Method
If you don't see "Forwarding" option:
1. Go to GoDaddy main dashboard
2. Click on "elpdata.com" domain name directly
3. Look for "Forward Domain" button
4. Set destination: https://www.elpdata.com
5. Choose "Permanent redirect (301)"

### Step 4: DNS A Records (Backup Method)
If forwarding isn't available, add these A records:
```
Type: A
Name: @
Value: 185.199.108.153
TTL: 1 Hour

Type: A
Name: @  
Value: 185.199.109.153
TTL: 1 Hour
```

## Expected Result
- `https://elpdata.com` → redirects to `https://www.elpdata.com`
- `http://elpdata.com` → redirects to `https://www.elpdata.com`

Changes take 1-24 hours to propagate worldwide.