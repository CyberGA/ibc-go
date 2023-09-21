package testvalues

import (
	"fmt"
	"time"

	"github.com/strangelove-ventures/interchaintest/v8/ibc"

	sdkmath "cosmossdk.io/math"

	sdk "github.com/cosmos/cosmos-sdk/types"

	"github.com/cosmos/ibc-go/e2e/semverutil"
	feetypes "github.com/cosmos/ibc-go/v8/modules/apps/29-fee/types"
)

const (
	StartingTokenAmount int64         = 100_000_000
	IBCTransferAmount   int64         = 10_000
	InvalidAddress      string        = "<invalid-address>"
	VotingPeriod        time.Duration = time.Second * 30
)

// ImmediatelyTimeout returns an ibc.IBCTimeout which will cause an IBC transfer to timeout immediately.
func ImmediatelyTimeout() *ibc.IBCTimeout {
	return &ibc.IBCTimeout{
		NanoSeconds: 1,
	}
}

func DefaultFee(denom string) feetypes.Fee {
	return feetypes.Fee{
		RecvFee:    sdk.NewCoins(sdk.NewCoin(denom, sdkmath.NewInt(50))),
		AckFee:     sdk.NewCoins(sdk.NewCoin(denom, sdkmath.NewInt(25))),
		TimeoutFee: sdk.NewCoins(sdk.NewCoin(denom, sdkmath.NewInt(10))),
	}
}

func DefaultTransferAmount(denom string) sdk.Coin {
	return sdk.Coin{Denom: denom, Amount: sdkmath.NewInt(IBCTransferAmount)}
}

func TendermintClientID(id int) string {
	return fmt.Sprintf("07-tendermint-%d", id)
}

func SolomachineClientID(id int) string {
	return fmt.Sprintf("06-solomachine-%d", id)
}

// TokenMetadataFeatureReleases represents the releases the token metadata was released in.
var TokenMetadataFeatureReleases = semverutil.FeatureReleases{
	MajorVersion: "v8",
}

// GovGenesisFeatureReleases represents the releases the governance module genesis
// was upgraded from v1beta1 to v1.
var GovGenesisFeatureReleases = semverutil.FeatureReleases{
	MajorVersion: "v7",
}

// SelfParamsFeatureReleases represents the releases the transfer module started managing its own params.
var SelfParamsFeatureReleases = semverutil.FeatureReleases{
	MajorVersion: "v8",
}

// MemoFeatureReleases represents the releases the memo field was released in.
var MemoFeatureReleases = semverutil.FeatureReleases{
	MajorVersion: "v6",
	MinorVersions: []string{
		"v2.5",
		"v3.4",
		"v4.2",
		"v5.1",
	},
}

// TotalEscrowFeatureReleases represents the releases the total escrow state entry was released in.
var TotalEscrowFeatureReleases = semverutil.FeatureReleases{
	MinorVersions: []string{
		"v7.1",
	},
}

// IbcErrorsFeatureReleases represents the releases the IBC module level errors was released in.
var IbcErrorsFeatureReleases = semverutil.FeatureReleases{
	MajorVersion: "v8.0",
}

// LocalhostClientFeatureReleases represents the releases the localhost client was released in.
var LocalhostClientFeatureReleases = semverutil.FeatureReleases{
	MinorVersions: []string{
		"v7.1",
	},
}

// DenomMetadataFeatureReleases represents the releases the human readable denom feature was released in.
var DenomMetadataFeatureReleases = semverutil.FeatureReleases{
	MajorVersion: "v8",
}
