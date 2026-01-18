{
  description = "Deno Fresh development environment";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = nixpkgs.legacyPackages.${system};
        
        # Map Nix system to Deno's platform naming
        denoSystem = {
          x86_64-linux = "x86_64-unknown-linux-gnu";
          aarch64-linux = "aarch64-unknown-linux-gnu";
          x86_64-darwin = "x86_64-apple-darwin";
          aarch64-darwin = "aarch64-apple-darwin";
        }.${system};
        
        deno264 = pkgs.stdenv.mkDerivation {
          pname = "deno";
          version = "2.6.4";
          
          src = pkgs.fetchzip {
            url = "https://github.com/denoland/deno/releases/download/v2.6.4/deno-${denoSystem}.zip";
            sha256 = "sha256-wHj/xvgobJTc73dxjvLL8YpQ4oQr9psS72yqHUZL7no=";
            stripRoot = false;
          };
          
          installPhase = ''
            mkdir -p $out/bin
            cp deno $out/bin/deno
            chmod +x $out/bin/deno
          '';
        };
      in
      {
        devShells.default = pkgs.mkShell {
          buildInputs = [
            deno264
          ];

          shellHook = ''
            echo "Deno $(deno --version | head -n 1) development environment"
            echo "Fresh project ready!"
          '';
        };
      }
    );
}